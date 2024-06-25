import { Field, Formik, FormikErrors, FormikProps, FormikValues, withFormik } from "formik";
import { FormTextField } from "../materialUI/FormTextField";
import { ButtonBox, CustomErrorMessage, CustomForm, ErrorBox, InputContainer, Submit } from "./formStyled";
import { InputAdornment } from "@mui/material";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/themes";
import { ReactElement, useState } from "react";
import zIndex from "@mui/material/styles/zIndex";


interface InputDataObjInterface {
    type: string,
    name: string,
    placeholder: string
}

type Props = {
    initialValues: {},
    validationSchema: {},
    handleSubmit: any,
    submitName: string,
    inputsDataArr: InputDataObjInterface[] | [],
    sx?: {}
    children?: ReactElement,
    fieldsType?: {} 
}

const InnerForm = (props: Props & FormikProps<any>) => { 
    const {
        initialValues, 
        validationSchema, 
        inputsDataArr, 
        handleSubmit, 
        submitName, 
        sx,
        children
    } = props;

    const { touched, errors, isSubmitting } = props;
    const touchedKeysArr = Object.keys(touched);
    const errorsKeysArr = Object.keys(errors);
    
    const [isEyeOpen, setIsEyeOpen] = useState(false);

    const checkIfError = (name: string) => {
        if(touchedKeysArr.length > 0){
            return (touchedKeysArr.includes(name) && errorsKeysArr.includes(name)) ? true : false;
        }
    }

    const renderEyeIcon = () => {
        // event?: React.MouseEvent<HTMLOrSVGElement>
        return (isEyeOpen 
            ? <InputAdornment position='end' onClick={() => setIsEyeOpen(false)}>
                <Icon 
                    iconName={'#icon-eye-opened'} 
                    sx={{
                        width: '15px', 
                        height: '15px', 
                        cursor: 'pointer', 
                        [theme.breakpoints.up('tablet')]:{
                            width: '20px', height: '20px'
                        }}}
                    aria-label="hide password"
                    onClick={() => setIsEyeOpen(false)}
                />
              </InputAdornment>
            : <InputAdornment position='end' onClick={() => setIsEyeOpen(true)}>
                <Icon 
                    iconName={'#icon-eye-closed'} 
                    sx={{
                        width: '15px', 
                        height: '15px', 
                        cursor: 'pointer', 
                        [theme.breakpoints.up('tablet')]:{
                            width: '20px', height: '20px'
                        }}}
                    aria-label="show password"
                    onClick={() => setIsEyeOpen(true)}
                />
              </InputAdornment>   
        )
    }

    return <CustomForm sx={sx}>
        {inputsDataArr.length > 0 && inputsDataArr.map((obj, i) => {
            return <InputContainer key={i}>{obj.type !== 'password' 
                ? <>
                    <Field 
                        type={obj.type} 
                        name={obj.name} 
                        component={FormTextField}
                        InputProps={{
                            startAdornment:
                                <InputAdornment 
                                    position="start"
                                >{`${obj.placeholder}`}</InputAdornment>,
                        }}
                        sx={{
                            zIndex: '10',

                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: `${checkIfError(obj.name) ? 'transparent' : theme.palette.custom.authInputBorder}`
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: `${checkIfError(obj.name) && '1px solid transparent'}`,
                            },
                        }}
                    />
                    <CustomErrorMessage name={obj.name} component='p'/>
                    {checkIfError(obj.name) && <ErrorBox name={obj.name}/>}
                </>
                : <>
                    <Field 
                        type={!isEyeOpen ? 'password' : 'text'} 
                        name={obj.name} 
                        component={FormTextField}
                        InputProps={{
                            startAdornment:
                                <InputAdornment 
                                    position="start"
                                >{`${obj.placeholder}`}</InputAdornment>,
                            endAdornment: (renderEyeIcon())
                        }}
                        sx={{
                            zIndex: '10',

                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: `${checkIfError(obj.name) ? 'transparent' : theme.palette.custom.authInputBorder}`
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: `${checkIfError(obj.name) && '1px solid transparent'}`,
                            },
                        }}
                    />
                    <CustomErrorMessage name={obj.name} component='p'/>
                    {checkIfError(obj.name) && <ErrorBox name={obj.name}/>}
                </>
            }
            </InputContainer>
        })}
        <ButtonBox>
            <Submit id="submitButton" type="submit">
                {submitName}
            </Submit>
            {children}
        </ButtonBox>
    </CustomForm>
}

export const Form = (props: Props) => {
    // const { touched, errors, isSubmitting, message } = props;
    // const { touched, errors, isSubmitting } = props;
    const {
        initialValues, 
        validationSchema, 
        inputsDataArr, 
        handleSubmit, 
        submitName, 
        sx,
        children
    } = props;

    const MyForm = withFormik<any, any>({
        // Transform outer props into form values
        mapPropsToValues: () => ({...initialValues}),
      
        // Add a custom validation function (this can be async too!)
        validationSchema: validationSchema,
      
        handleSubmit: values => {
            handleSubmit(values);
        //   return values;
        },
    })(InnerForm);

    return <MyForm 
        inputsDataArr={inputsDataArr} 
        submitName={submitName} 
        children={children} 
        sx={sx}
    />
}

import { Field, Formik } from "formik";
import { FormTextField } from "../materialUI/FormTextField";
import { ButtonBox, CustomErrorMessage, CustomForm, InputContainer, Submit } from "./formStyled";
import { InputAdornment } from "@mui/material";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/themes";
import { ReactElement, useState } from "react";

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
    children?: ReactElement
}

export const Form = (props: Props) => {
    const {
        initialValues, 
        validationSchema, 
        inputsDataArr, 
        handleSubmit, 
        submitName, 
        sx,
        children
    } = props;
    const [isEyeOpen, setIsEyeOpen] = useState(false);

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
    
    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >   
        <CustomForm sx={sx}>
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
                        />
                        <CustomErrorMessage name={obj.name} component='p'/>
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
                        />
                        <CustomErrorMessage name={obj.name} component='p'/>
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
    </Formik>
}
import sprite from '../../assets/icons/icons.svg';
import { CustomIcon } from "./styled";

type Props = {
    iconName: Object,
    sx?: Object,
    onClick?: () => void
}

export const Icon = ({iconName, sx}: Props) => {
    return <CustomIcon sx={sx} inheritViewBox={true}>
        <use  href={sprite + iconName}/>
    </CustomIcon>
}

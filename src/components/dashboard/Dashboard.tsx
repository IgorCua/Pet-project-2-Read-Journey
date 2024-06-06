import { Section } from "./styled"

type Props = {
    children: React.ReactElement
    sx?: {}
}

export const Dashboard = ({children, sx}: Props) => {
    return <Section component={'section'} sx={sx}>
        {children}
    </Section>
}
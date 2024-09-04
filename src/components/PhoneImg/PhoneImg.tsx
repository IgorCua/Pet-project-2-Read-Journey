import { Image, ImageContainer } from "./styled";

export const PhoneImg = () => {
    return (    
        <ImageContainer>
            <Image 
                alt="phone image" 
                src={require('../../assets/images/iPhone-15-Black-pc-1x.png')} 
                srcSet={`
                    ${require("../../assets/images/iPhone-15-Black-pc-1x.png")} 1x, 
                    ${require("../../assets/images/iPhone-15-Black-pc-2x.png")} 2x
                `}
            />
        </ImageContainer>
    )
}
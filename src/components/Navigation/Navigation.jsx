import React from 'react';
import {Container, Nav, Logo, Link} from './styles';
import * as images from '../../assets';
export const Navigation  = ({data}) => {

    const handleSection = ({section}) => {
        const sectionElement = document.getElementById(section).offsetTop;
        window.screenTop(0, sectionElement);
    }


    return (
        <Container>
            <Nav>
                <Logo src={images.Logo} alt= "logo"/>
                {data.map(item => {
                    return (
                        <Link 
                        key = {item.id}
                        onClick={() => {

                        }}
                        >
                            {item.name}
                        </Link>
                    )
                })}
            </Nav>
        </Container>
    )


}
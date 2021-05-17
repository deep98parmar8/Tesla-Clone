import React from 'react';
import styled from 'styled-components';
import Section from "./Section";
function Home() {
    return (
        <div>
            <Container>
                <Section 
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBthText="Existing Inventory"
                />
                <Section 
                  title="Model Y"
                  description="Order Online For Touchless Delivery"
                  backgroundImg="model-y.jpg"
                  leftBtnText="Custom Order"
                  rightBthText="Existing Inventory"
                 />
                <Section 
                 title="Model 3"
                 description="Order Online For Touchless Delivery"
                 backgroundImg="model-3.jpg"
                 leftBtnText="Custom Order"
                 rightBthText="Existing Inventory"
                />
                <Section 
                 title="Model X"
                 description="Order Online For Touchless Delivery"
                 backgroundImg="model-x.jpg"
                 leftBtnText="Custom Order"
                 rightBthText="Existing Inventory"
                />
                <Section 
                 title="Low Cost Solar Panels"
                 description="Money-Back guarantee"
                 backgroundImg="solar-panel.jpg"
                 leftBtnText="Order Now"
                 rightBthText="Learn More"
                />
                <Section 
                 title="Solar For New Roofs"
                 description="Solar roof that cost less than a new roof with solar panels"
                 backgroundImg="solar-roof.jpg"
                 leftBtnText="Order Now"
                 rightBthText="Learn More"
                />
                <Section 
                 title="Accessories"
                 description="Solar roof that cost less than a new roof with solar panels"
                 backgroundImg="accessories.jpg"
                 leftBtnText="Shop Now"
                />
            </Container>

        </div>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    `
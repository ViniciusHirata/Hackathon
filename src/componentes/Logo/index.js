// import logo from '../../imagens/logo.svg'
import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 80%;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            {/* <p><strong>Net</strong>Xoes</p> */}
       </LogoContainer>
    )
}

export default Logo
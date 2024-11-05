
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

`
const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    font-size: 20px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Создать аккаунт
            </Title>
            <Form>
                <Input placeholder="Имя"/>
                <Input placeholder="Фамилия"/>
                <Input placeholder="Имя пользователя"/>
                <Input placeholder="Почта"/>
                <Input placeholder="Пароль"/>
                <Input placeholder="Подтвердите пароль"/>
                <Agreement>
                    Создавая аккаунт, я даю согласие на обработку персональных данных в соответствии с политикой конфиденциальности
                </Agreement>
                <Button>
                    Создать
                </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
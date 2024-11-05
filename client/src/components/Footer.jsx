import { Facebook, MailOutline, Phone, Room, Telegram, YouTube } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const Socialcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    width: 36%;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Проект
            </Logo>
            <Desc>
                Учебный проект по созданию сайта-каталога
                по продаже футболок
            </Desc>
            <SocialContainer>
                <Socialcon color="3B5999">
                    <Facebook/>
                </Socialcon>                
                <Socialcon color="55ACEE">
                    <Telegram/>
                </Socialcon>
                <Socialcon color="E60023">
                    <YouTube/>
                </Socialcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Полезные ссылки
            </Title>
            <List>
                <ListItem>
                    Главная
                </ListItem>
                <ListItem>
                    Корзина
                </ListItem>
                <ListItem>
                    Мужская Коллекция
                </ListItem>
                <ListItem>
                    Женская Коллекция
                </ListItem>
                <ListItem>
                    Accessories
                </ListItem>
                <ListItem>
                    Мой аккаунт
                </ListItem>
                <ListItem>
                    Отслеживание заказов
                </ListItem>
                <ListItem>
                    Избранное
                </ListItem>
                <ListItem>
                    Условия
                </ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Контакты
            </Title>
            <ContactItem>
                <Room style ={{marginRight:"10px"}}/>
                Адрес
            </ContactItem>
            <ContactItem>
                <Phone style ={{marginRight:"10px"}}/>
                +39372324352
            </ContactItem>
            <ContactItem>
                <MailOutline style ={{marginRight:"10px"}}/>
                email@.ru
            </ContactItem>
            <Payment src="https://ostrov-mebeli.ru/local/images/paymnet_systems.png"/>
        </Right>
    </Container>
  )
}

export default Footer
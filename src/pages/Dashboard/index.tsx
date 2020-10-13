import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
                alt="Leonardo Vitor Dantas"
                srcSet=""
              />
              <strong>Leonardo Vitor</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
                  alt="Leonardo Vitor Dantas"
                  srcSet=""
                />
                <strong>Leonardo Vitor</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                10:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
                  alt="Leonardo Vitor Dantas"
                  srcSet=""
                />
                <strong>Leonardo Vitor</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
                  alt="Leonardo Vitor Dantas"
                  srcSet=""
                />
                <strong>Leonardo Vitor</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                16:00
              </span>

              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
                  alt="Leonardo Vitor Dantas"
                  srcSet=""
                />
                <strong>Leonardo Vitor</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;

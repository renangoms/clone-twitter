import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Renan Goms</h1>
        <h2>@renangoms</h2>

        <p>
          Developer at <a href="www.google.com">@Criativa</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Mato Grosso do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de março de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;

import { FC } from 'react';

import s from './AboutPage.module.scss';

import { Container, Title } from '../../components';

interface Props {}

const AboutPage: FC<Props> = () => {
  return (
    <div className={s.aboutPage}>
      <Container>
        <div className={s.box}>
          <Title className={s.mainTitle} color='black' size='38px' textUpper>
            о компании
          </Title>
          <Title className={s.secondTitle} tag='h3' size='24px' color='black'>
            Штаб-квартира корпорации
          </Title>
          <Title className={s.secondTitle} tag='h3' size='24px' color='black'>
            Кэри, Северная Каролина
          </Title>
          <p>
            Epic Games основана в 1991 году, на счету компании игровые серии Fortnite, Unreal, Gears
            of War, Shadow Complex и Infinity Blade. Технология Unreal Engine от Epic обеспечивает
            высочайший уровень и качество интерактивных развлечений на ПК, консолях, мобильных
            платформах, устройствах виртуальной и дополненной реальности, а также в веб-приложениях.
            Unreal Engine бесплатно доступен по адресу unrealengine.com. За новостями студии можно
            следить здесь: @EpicGames.
          </p>
        </div>
        <div className={s.box}>
          <Title className={s.mainTitle} color='black' size='38px' textUpper>
            КОНТАКТЫ
          </Title>
          <div>
            <div className={s.companyName}>Epic Games, Inc.</div> 620 Crossroads Blvd. <br /> Cary,
            NC USA <br /> Тел: +1 919 854 0070
          </div>
        </div>
        <div className={s.box}>
          <Title className={s.mainTitle} color='black' size='38px' textUpper>
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </Title>
          <div className={s.row}>
            <p className={s.question}>Могу ли я лично посетить студию?</p>
            <p className={s.answer}>
              Как правило, мы не устраиваем экскурсии по студии. Мы были бы рады помочь всем
              желающим как можно больше узнать об Epic, но все же нашей главной задачей остается
              создание оптимальных рабочих условий для всех наших сотрудников — ведь только
              сосредоточившись на работе, они могут и дальше создавать замечательные игры и
              передовые технологии.
            </p>
          </div>
          <div className={s.row}>
            <p className={s.question}>
              Мы профессионально занимаемся музыкой/графикой/захватом
              движений/тестированием/вопросами монетизации. Мы хотим предложить наши товары и услуги
              Epic. К кому нам обратиться?
            </p>
            <p className={s.answer}>
              Мы создаем свои игры собственными силами и прибегаем к услугам только проверенных
              специалистов и команд, с которыми у нас уже давно устоявшиеся отношения. В данный
              момент мы не ищем новых подрядчиков.
            </p>
          </div>
          <div className={s.row}>
            <p className={s.question}>
              У меня есть отличная идея для вашей будущей игры. Мы могли бы это обсудить?
            </p>
            <p className={s.answer}>
              Мы не можем принимать подробные обращения. Пожалуйста, не присылайте нам свои идеи,
              сюжеты, рисунки, уровни, музыку и так далее. Мы не имеем юридического права оценивать
              их.
            </p>
          </div>
          <div className={s.row}>
            <p className={s.question}>Где я могу найти ваши игры?</p>
            <p className={s.answer}>
              Наши игры и многое другое можно загрузить совершенно бесплатно. Кнопка загрузки для
              программы запуска Epic Games находится на этой странице в правом верхнем углу. Наши
              классические игры вроде Unreal Tournament 3 Black, Unreal Tournament 2004 ECE, Unreal
              Tournament GOTY и The Unreal Deal Pack также доступны в Steam.
            </p>
          </div>
          <div className={s.row}>
            <p className={s.question}>
              Могу ли я монетизировать видеоролики с записью моего прохождения ваших игр?
            </p>
            <p className={s.answer}>Да, мы ничего не имеем против.</p>
          </div>
          <div className={s.row}>
            <p className={s.question}>
              Согласится ли Epic Games спонсировать мой клан в предстоящем турнире?
            </p>
            <p className={s.answer}>
              В данный момент мы не предлагаем спонсорскую поддержку участникам игровых соревнований
              и турниров.
            </p>
          </div>
          <div className={s.row}>
            <p className={s.question}>Есть ли у Epic Games программа стипендий?</p>
            <p className={s.answer}>В данный момент мы не предлагаем стипендий.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;

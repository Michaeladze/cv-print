import React from 'react';
import TimeLine from '../TimeLine/TimeLine';
import { ITimeLine } from '../TimeLine/TimeLine.interface';

const WorkExperience: React.FC = () => {

  const data: ITimeLine[] = [
    {
      iId: 1,
      sBeginDate: '09.2019',
      sEndDate: 'наст. время',
      sPlace: 'СИБУР, НИПИГАЗ',
      sParamName: 'Эксперт по складской логистике',
      aAchievements: [
        {
          iId: 1,
          sName: 'Управление внутризаводской логистикой предприятия',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Анализ и оптимизация складских процессов внутризаводской логистики предприятия',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Организация эффективных процессов приема/разгрузки оборудования и материалов',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 4,
          sName: 'Взаимодействие и документооборот с подрядными организациями, в т.ч. с иностранными на английском языке',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 2,
      sBeginDate: '04.2005',
      sEndDate: '04.2017',
      sPlace: 'ЗАО "Ямалгазинвест"',
      sParamName: 'Начальник отдела организации перевозок и хранения МТР',
      aAchievements: [
        {
          iId: 1,
          sName: 'Организовал транспортную логистику с нуля.\n' +
            'Организовал работу по перевозкам всеми видами транспорта, в том числе мультимодальные перевозки оборудования и материалов с заводов-изготовителей до мест хранения.\n' +
            'Разрабатывал алгоритмы, оптимизировал работу и многократно принимал непосредственное участие в руководстве сезонными кампаниями по смешанным перевозкам, перегрузкам (ПРР) дорогостоящего и негабаритного оборудования с мест хранения, в том числе с заводов-производителей, в зоны строительства.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Разрабатывал транспортные макрологистические схемы - supply chain - доставки оборудования (завод - накопительная база хранения - приобъектный склад - зона монтажа) более чем для 30 объектов строительства (КС - ЛЧ - ТС) в различных регионах РФ, в том числе в северных регионах РФ в условиях отсутствия дорожно-транспортной инфраструктуры.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Производил расчеты и оптимизацию стоимости перевозок. Проводил аналитическую и статистическую работу. Ведение графиков, составление справок, написание обосновывающих писем и аналитических записок.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 4,
          sName: 'Руководил работой по приёмке и проверке документации от контрагентов в рамках Агентских договоров и договоров хранения по затратам за оказанные логистические услуги (транспорт, хранение) с последующей передачей в службы бухгалтерского учета.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 5,
          sName: 'Знаю условия хранения и условия перевозки всех видов оборудования.\n' +
            'Типы складов: холодный, тёплый, открытая площадка.\n' +
            'Организовал и провёл более 15 плановых и внеплановых инвентаризаций МТР в местах хранения (более 10 складов в сессию).',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 6,
          sName: 'Проводил переговоры с транспортно-логистическими компаниями, в том числе по водному и авиационному транспорту, по вопросам предоставления технико-коммерческих предложений на оказание транспортных и прочих логистических и сопутствующих услуг.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 7,
          sName: 'Успешное оперативное и долгосрочное планирование работы отдела. Принимал участие в планировании работы и выработки перспективной стратегии логистического оператора (3pl) - (административно-управленческий и производственный персонал до 500 человек).',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 8,
          sName: 'Принимал участие в формировании годового бюджета, до 7 млрд. руб., на логистику.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 9,
          sName: 'Обладаю экспертным уровнем взаимодействия со службами закупки, комплектации, производства и эксплуатации, а также со службой бухгалтерского учета. В рамках должностных полномочий занимался обучением молодых специалистов, студентов, практикантов.',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 1,
          sName: <>
            <p><strong>Реализованные проекты:</strong></p>
            <p>- МГ "Ямал-Европа"</p>
            <p>- "Газопровод Починки-Грязовец"</p>
            <p>- МГ "СРТО-Торжок",</p>
            <p>- СМГ "Бованенково-Ухта"</p>
            <p> - СМГ "Ухта-Торжок"</p>
            <p>- "Расширение Уренгойского газотранспортного узла"</p>
            <p>- более 10 объектов ГТС "Оснащение ИТСО и САЗ"</p>
          </>,
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 3,
      sBeginDate: '08.1999',
      sEndDate: '12.2004',
      sPlace: 'Индивидуальное предпринимательство',
      sParamName: 'Финансовый директор',
      aAchievements: [
        {
          iId: 1,
          sName: 'Управление закупками ЗАО "ПИК-АКС"',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Торгово-закупочная деятельность товаров народного потребления (пищевая продукция)',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Управление финансами',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 4,
          sName: 'Закупка, доставка, хранение, реализация',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 4,
      sBeginDate: '04.1994',
      sEndDate: '08.1999',
      sPlace: 'ЗАО "ФАРТ"',
      sParamName: 'Генеральный директор',
      aAchievements: [
        {
          iId: 1,
          sName: 'Управлял персоналом (до 25 сотрудников)',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Управлял финансами',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Управлял розничной торговой сетью (2 магазина и 10 торговых точек)',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    }
  ];

  return (
    <TimeLine data={data} mh={322}/>
  );
};

export default WorkExperience;

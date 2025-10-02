import React from 'react';
import styled from 'styled-components';
import {
  ManagementIcon,
  JurisprudenceIcon,
  EconomicsIcon,
  PublicAdministrationIcon,
  PsychologyIcon,
  BusinessInformaticsIcon
} from './icons.jsx';
const directions = [
  {
    id: 1,
    title: 'Менеджмент',
    formats: ['Очно', 'Заочно', 'Очно-заочно', 'Дистанционно'],
    currentPrice: '76 500 ₽',
    oldPrice: '90 000 ₽',
    discount: '-15%',
     description: 'Онлайн-курс поможет вам освоить новые навыки в удобном формате.Учитесь в своём темпе с доступом к материалам.',    duration: '2-4 года',
    icon: <ManagementIcon/>,
    hoverDescription:'Онлайн-курс поможет вам освоить новые навыки в удобном формате.'
  },
  {
    id: 2,
    title: 'Юриспруденция',
    formats: ['Очно', 'Заочно', 'Очно-заочно', 'Дистанционно'],
    currentPrice: '76 500 ₽',
    oldPrice: '90 000 ₽',
    discount: '-15%',
    description: 'Онлайн-курс поможет вам освоить новые навыки в удобном формате.Учитесь в своём темпе с доступом к материалам.',    duration: '2-4 года',
    icon: <JurisprudenceIcon/>,
    hoverDescription:'Онлайн-курс поможет вам освоить новые навыки в удобном формате.'
  },
  {
    id: 3,
    title: 'Экономика',
    formats: ['Очно', 'Очно-заочно', 'Дистанционно', 'Вечернее'],
    currentPrice: '76 500 ₽',
    oldPrice: '90 000 ₽',
    discount: '-15%',
    description: 'Онлайн-курс поможет вам освоить новые навыки в удобном формате.Учитесь в своём темпе с доступом к материалам.',    duration: '2-4 года',
    icon: <EconomicsIcon/>,
    hoverDescription:'Онлайн-курс поможет вам освоить новые навыки в удобном формате.'
  },
  {
    id: 4,
    title: 'Государственное и муниципальное управление',
    formats: ['Очно', 'Заочно', 'Дистанционно', 'Вечернее'],
    currentPrice: '76 500 ₽',
    oldPrice: '90 000 ₽',
    discount: '-15%',
description: 'Онлайн-курс поможет вам освоить новые навыки в удобном формате.Учитесь в своём темпе с доступом к материалам.',    duration: '2-4 года',
    icon: <PublicAdministrationIcon/>,
    hoverDescription:'Онлайн-курс поможет вам освоить новые навыки в удобном формате.'
  },
  {
    id: 5,
    title: 'Психология',
    formats: ['Заочно', 'Очно-заочно', 'Дистанционно', 'Вечернее'],
    currentPrice: '76 500 ₽',
    oldPrice: '90 000 ₽',
    discount: '-15%',
    description: 'Онлайн-курс поможет вам освоить новые навыки в удобном формате.Учитесь в своём темпе с доступом к материалам.',
    duration: '2-4 года',
    icon: <PsychologyIcon/>,
    hoverDescription:'Онлайн-курс поможет вам освоить новые навыки в удобном формате.'
  },
  {
    id: 6,
    title: 'Бизнес-информатика',
    formats: ['Очно', 'Очно-заочно', 'Вечернее','Дистанционно'],
    currentPrice: '76 500 ₽',
    oldPrice: '90 000 ₽',
    discount: '-15%',
    description: 'Онлайн-курс поможет вам освоить новые навыки в удобном формате.Учитесь в своём темпе с доступом к материалам 24/7.',
    duration: '2-4 года',
    icon: <BusinessInformaticsIcon/>,
    hoverDescription:'Онлайн-курс поможет вам освоить новые навыки в удобном формате.'
  }
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="lg:px-30 md:px-8 px-6 mt-10 lg:mt-5 md:mt-15">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#edf7e7] border border-[#01a08e]/20 lg:mb-3 md:mb-3 mb-5"
          >
            <div className="w-2 h-2 bg-[#01a08e] rounded-full" />
            <span className="text-sm font-medium text-[#073e4a]">Обучение</span>
          </div>
          {/* <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#19232d]">
            Направления обучения
          </h1> */}
                <h2 className="text-3xl lg:text-5xl font-bold text-[#19232d] leading-tight mb-7">
                Направления{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#01a08e]">обучения</span>
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-[#2dffe6]/30 -rotate-1 z-0"></div>
                </span>
              </h2>

        <div className="cards-grid">
          {directions.map((direction) => (
            <div key={direction.id} className="card-container shadow-lg hover:shadow-2xl mt-3">
              <div className="card cursor-pointer">
                <div className="front-content">
                  <div className="front-content-inner">
                    <div className="icon">{direction.icon}</div>
                    <h3 className="title">{direction.title}</h3>
                    <p className="description">{direction.description}</p>
                    
                    <div className="formats">
                      {direction.formats.map((format, index) => (
                        <span key={index} className="format-tag">{format}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-inner">
                    <div className="discount-badge">{direction.discount}</div>
                    <h3 className="heading-hover">{direction.title}</h3>
                     <p className="description">{direction.hoverDescription}</p>
                    <div className="price-section">
                      <span className="old-price">{direction.oldPrice}</span>
                      <span className="current-price">от {direction.currentPrice}</span>
                    </div>
                    <p className="duration">Срок обучения: {direction.duration}</p>
                    {/* <div className="formats-hover">
                      {direction.formats.map((format, index) => (
                        <span key={index} className="format-tag-hover">{format}</span>
                      ))}
                    </div> */}
                    <div className="button-container">
                      <button className="see-more-btn">Узнать больше</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 0 auto;
  }

  .card-container {
    width: 100%;
    height: 280px;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    /* Remove transition from container */
  }

  .card-container:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Only animate these */
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: relative;
    overflow: hidden;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding: 30px 25px;
    background: white;
    transition: opacity 0.4s ease, transform 0.4s ease; /* Simplify transition */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    /* Add will-change for performance */
    will-change: opacity, transform;
  }

  .front-content-inner {
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .icon {
    width: 40px;
    height: 40px;
    font-size: 32px;
    margin-bottom: 15px;
  }

  .front-content .title {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #19232d;
    line-height: 1.3;
  }

  .front-content .description {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    flex: 1;
    overflow: hidden;
  }

  .front-content .formats {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .format-tag {
    background: #f0f0f0;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    color: #555;
    border: 1px solid #e0e0e0;
    
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    background: white;
    color: black;
    padding: 30px 25px;
    line-height: 1.5;
    border-radius: 15px;
    pointer-events: none;
    opacity: 0;
    transform: translateY(10px); /* Reduce initial transform */
    transition: opacity 0.4s ease, transform 0.4s ease; /* Simplify */
    z-index: 1;
    overflow: hidden;
    /* Add will-change for performance */
    will-change: opacity, transform;
  }

  .content-inner {
    text-align: left;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .discount-badge {
    position: absolute;
    top: 0;
    right: 0;
    background: #da3c3cff;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  .content .heading-hover {
    font-size: 16px;
    color: #00B09D;
    font-weight: 700;
    margin-bottom: 10px;
    padding-right: 70px;
  }

  .price-section {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 10px 0;
  }

  .old-price {
    text-decoration: line-through;
    color: #727272ff;
    font-size: 16px;
  }

  .current-price {
    font-size: 24px;
    font-weight: bold;
    color: #2e2e2eff;
  }

  .duration {
    font-size: 14px;
    color: #363636ff;
    margin: 5px 0;
  }

  .button-container {
    margin-top: auto;
    opacity: 0;
    transform: translateY(5px); /* Reduce initial transform */
    transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s; /* Simplify */
    pointer-events: all;
  }

  .see-more-btn {
    background: #00B09D;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    width: 100%;
    pointer-events: all;
  }

  .see-more-btn:hover {
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  /* Hover states - simplified */
  .card-container:hover .content {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .card-container:hover .front-content {
    opacity: 0;
    transform: translateY(-10px); /* Reduce transform distance */
  }

  .card-container:hover .button-container {
    opacity: 1;
    transform: translateY(0);
  }

  /* Add transform to card for better performance */
  .card > * {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media (max-width: 1350px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
  
    .cards-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .card .front-content,
    .card .content {
      padding: 25px 20px;
    }
  }

    
`;

export default Card;
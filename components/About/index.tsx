/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
    return (
        <section className='container' id='about-me'>
            <div className='about-container'>
                <div className='about__image'>
                    <img src='/images/about-me.jpg' alt='about me ' />
                </div>
                <div className='about__content'>
                    <p className='about__text'>
                        Jesteś jak ta filiżanka, którą trzymam w dłoni. Możesz
                        nauczyć się tej delikatności wobec siebie i odkryć urok
                        subtelności poprzez czucie, uczucia. Kiedyś bałam się
                        czuć, bo to bardzo bolało czasem. Czuć stratę, smutek,
                        odrzucenie, strach - bałam się, że moje emocje mnie
                        oszukują i odrealniają.
                    </p>
                    <p className='about__text'>
                        Dziś chcę tobie pokazać jak czucie emocji otwiera cię na
                        siebie i na widzenie rzeczywistości takiej jaką ona
                        jest, bez uciekania w pozytywne myślenie. Nauczysz się,
                        że uczucia to akceptacja rzeczywistości, a nie uciekanie
                        w wyobrażenie lub unikanie. Kiedyś mi też wydawało się,
                        że tak będzie łatwiej: uciec, zapomnieć, odciąć się.
                    </p>

                    <ul className='about__list'>
                        To co mogę tobie pokazać poprzez yogę i pracę z
                        akceptacją poprzez mindfulness to jak doświadczać tego
                        co czujesz z pewną otwartością i życzliwością względem
                        siebie. Nie zawsze jesteśmy tego świadomi jak nasza
                        ocena samych siebie może wpływać na nasze życie:
                        relacje, pracę, kreatywność. Zawsze w dowolnym momencie
                        twojego życia możesz:
                        <li>
                            <span>
                                nauczyć jak być dla siebie cierpliwym, kiedy
                                pojawiają się różne emocje/uczucia
                            </span>
                        </li>
                        <li>
                            <span>
                                patrzeć na na siebie z prawdziwym
                                zainteresowaniem, życzliwością i szacunkiem
                            </span>
                        </li>
                        <li>
                            <span>
                                nauczysz się obserwować co się dzieje i rozwijać
                                głębokie zrozumienie i prawdziwy kontakt z sobą
                                i z sytuacją, nawet w trudnych momentach życia
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;

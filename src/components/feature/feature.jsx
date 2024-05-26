import style from "../../components/feature/feature.module.css";
import Shild from "../../assets/img/shield.png";
import Archive from "../../assets/img/archive.png";
import Midia from "../../assets/img/midia.png";
import Rocket from "../../assets/img/rocket.png";

const Feature = () => {
    return (
        <section className={style.Feature}>
            <div className={style.featureWrapper}>
            <div className={style.featureWrapperContent}>
                {/* texto de cima */}
                <div className={style.featureText}>
                    <h2>Benefícios de joga uno</h2>
                    <p>Saiba mais sobres os benefícios de joga uno com seus amigos e família</p>
                </div>
                 {/* cards */}
                <div className={style.Content}>
                    {/* card 1 */}
                    <div className={style.featureCardDiv}>
                        <div className={style.featureCards}>
                            <a>
                                <img src={Shild} className={style.icons} />
                            </a>
                        </div>
                        <div className={style.featureCardsText}>
                            <h2>Divirta-se com segurança.</h2>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className={style.featureCardDiv}>
                        <div className={style.featureCards}>
                            <a>
                                <img src={Archive} className={style.icons} />
                            </a>
                        </div>
                        <div className={style.featureCardsText}>
                            <h2>Pensamentos fora da caixinha.</h2>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className={style.featureCardDiv}>
                        <div className={style.featureCards}>
                            <a>
                                <img src={Midia} className={style.icons} />
                            </a>
                        </div>
                        <div className={style.featureCardsText}>
                            <h2>Ativa o seu lado criativo.</h2>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className={style.featureCardDiv}>
                        <div className={style.featureCards}>
                            <a>
                                <img src={Rocket} className={style.icons} />
                            </a>
                        </div>
                        <div className={style.featureCardsText}>
                            <h2>Estimula o raciocínio rápido.</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;

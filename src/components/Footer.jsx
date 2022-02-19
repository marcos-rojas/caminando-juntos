
import '../assets/components.css'
import '../assets/footer.css'

export default function Footer() {
    return (
        <div className="footer--section">
            <div className="info--section">
                <h3>Más Información</h3>
                <ul>
                    <li>Nosotros</li>
                    <li>Manual de Usuario</li>
                    <li>Términos y Condiciones</li>
                    <li>Trabaja con nosotros</li>
                </ul>
            </div>
            <div>
                <img src="../src/assets/mascot-icon.png" alt="" className='doglove--logo'/>
                <h4>Copyright</h4>
            </div>
            <div className="contact--section">
                <h3 id="asesoria--title">Deseas una asesoría</h3>
                <form action="" className="advice--form">
                    <input type="email" placeholder="Email" />
                    <button className='contact--btn'>Contáctanos</button>
                </form>
            </div>
        </div>
    );
}
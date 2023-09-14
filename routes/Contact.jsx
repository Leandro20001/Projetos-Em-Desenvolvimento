import styles from './Contact.module.css'
import Footter from '../src/components/fotter'
import Head from '../src/components/head'


function Contact(){
  return(

    <div>
      <html>
        <body>
          <Head/>

          <h2>Cosmos</h2>
            <div className={styles.displayInfo}>
              Cosmsos: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa, mollitia illo, obcaecati consequuntur ut quis hic accusamus autem tempore in doloribus dolores! Corporis asperiores sit similique eum eaque? Ullam Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam obcaecati quam maxime harum, nemo laudantium officiis, illo corrupti quas aspernatur vel ipsam quidem dolores nihil. Libero id rem suscipit? <br />
              <div id={styles.cosmosSpace}>
                <img id={styles.Cosmos} src="../images/Cosmos.JPG" alt="" />
                </div>
            </div>

            <Footter/>
          </body>
      </html>
    </div>
    
  )
}

export default Contact
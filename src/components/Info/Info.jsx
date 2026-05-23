import { dataInfo } from './infoData'
import './Info.css'

function InfoCard({ title, description, src }) {
  return (
    <div className="info-card">
      <img width={40} height={40} src={src} alt="" />
      <div>
        <div className="info-card-title">{title}</div>
        <div className="info-card-desc">{description}</div>
      </div>
    </div>
  )
}

function Info() {
  return (
    <section className="info-bar" aria-label="Cam kết dịch vụ">
      <div className="info-bar-inner">
        {dataInfo.map((item) => (
          <InfoCard
            key={item.id}
            title={item.title}
            description={item.description}
            src={item.src}
          />
        ))}
      </div>
    </section>
  )
}

export default Info

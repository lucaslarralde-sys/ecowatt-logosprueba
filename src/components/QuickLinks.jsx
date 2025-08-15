export default function QuickLinks(){
  const items = [
    {icon:'/img/icon-drops.png',   title:'Aguas y efluentes', href:'#servicios'},
    {icon:'/img/icon-factory.png', title:'Industria y productividad', href:'#servicios'},
    {icon:'/img/icon-concept.png', title:'Gestión ambiental', href:'#servicios'},
  ]
  return (
    <div className="quicklinks">
      {items.map((it,i)=>(
        <a key={i} className="ql-card" href={it.href}>
          <span className="ql-icon"><img src={it.icon} alt=""/></span>
          <span className="ql-title">{it.title}</span>
        </a>
      ))}
    </div>
  )
}

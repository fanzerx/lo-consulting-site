/* RESET */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial,Helvetica,sans-serif;
}

:root{
  --azul-escuro:#2c3f81;
  --azul-claro:#9aa9c8;
  --azul-hover:#23326a;
  --texto:#ffffff;
  --texto-suave:#eef3ff;
  --card-bg:rgba(255,255,255,0.12);
  --card-border:rgba(255,255,255,0.20);
  --shadow:0 10px 25px rgba(0,0,0,0.18);
}

html{
  scroll-behavior:smooth;
}

body{
  background:var(--azul-claro);
  color:var(--texto);
  line-height:1.5;
}

/* IMAGE MODAL */
.image-modal{
  display:none;
  position:fixed;
  z-index:999;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.9);
  justify-content:center;
  align-items:center;
  cursor:pointer;
}

.image-modal img{
  max-width:90%;
  max-height:90%;
}

.modal-content{
  border-radius:10px;
}

.close{
  position:absolute;
  top:30px;
  right:40px;
  color:white;
  font-size:40px;
  cursor:pointer;
}

/* HERO */
.hero{
  height:520px;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  color:white;
  overflow:hidden;
  padding-top:80px; /* espaço da barra azul */
}

.hero::after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(
    to bottom,
    rgba(0,0,0,0.45),
    rgba(0,0,0,0.22),
    rgba(0,0,0,0.45)
  );
  z-index:1;
}

.hero-slider{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:0;
}

.slide{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  opacity:0;
  transition:opacity 1s ease-in-out;
}

.slide.active{
  opacity:1;
}

/* BARRA AZUL NO TOPO DO HERO */
.hero-top{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100px;
  background:var(--azul-escuro);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 90px;
  z-index:5;
}

.hero-logo img{
height:100px;
}

.hero-menu{
  display:flex;
  align-items:center;
  gap:34px;
}

.hero-menu a{
  color:white;
  text-decoration:none;
  font-weight:600;
  font-size:15px;
  transition:color 0.3s ease;
  position:relative;
}

.hero-menu a::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:0;
  height:2px;
  background:var(--azul-claro);
  transition:width 0.3s ease;
}

.hero-menu a:hover{
  color:var(--azul-claro);
}

.hero-menu a:hover::after{
  width:100%;
}
.hero-certificacao img{
height:60px;
width:auto;
display:block;
}

.hero-certificacao span{
  display:block;
  font-size:13px;
  margin-bottom:4px;
  font-weight:600;
}

.hero-certificacao img{
  max-width:180px;
  width:100%;
  height:auto;
  display:block;
}

.certificados-flutuantes{
position:fixed;
right:25px;
bottom:95px;
display:flex;
flex-direction:column;
gap:12px;
z-index:200px;
}

.certificado-float{
width:220px;
background:white;
border-radius:8px;
box-shadow:0 6px 18px rgba(0,0,0,0.25);
padding:6px;
cursor:pointer;
transition:0.3s;
}


.certificado-float:hover{
transform:scale(1.05);
}

.certificado-float img{
width:100%;
height:auto;
}

.certificados-titulo{
color:white;
font-weight:bold;
font-size:22px;
text-align:center;
margin-bottom:4px;
text-shadow:0 2px 8px rgba(0,0,0,0.6);
}

/* CONTEÚDO CENTRAL */
.hero-content{
  position:absolute;
  top:55%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index:2;

  width:min(900px, calc(100% - 40px));
  text-align:center;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.hero h1{
  width:100%;
  font-size:48px;
  line-height:1.15;
  margin:0 0 18px 0;
  text-align:center;
  text-shadow:0 3px 14px rgba(0,0,0,0.65);
}

.hero p{
  width:100%;
  max-width:760px;
  margin:0 auto 28px auto;
  font-size:18px;
  color:#f3f6ff;
  text-align:center;
  text-shadow:0 2px 10px rgba(0,0,0,0.65);
}

.btn{
  background:var(--azul-escuro);
  color:#fff;
  padding:14px 28px;
  text-decoration:none;
  border-radius:8px;
  font-weight:bold;
  display:inline-block;
  transition:0.3s;
  border:1px solid rgba(255,255,255,0.35);
}

.btn:hover{
  background:var(--azul-hover);
  transform:translateY(-2px);
  box-shadow:0 5px 15px rgba(0,0,0,0.25);
}

/* CONTROLES DO SLIDER */
.slider-buttons{
  position:absolute;
  top:50%;
  width:100%;
  display:flex;
  justify-content:space-between;
  transform:translateY(-50%);
  z-index:3;
  padding:0 20px;
}

.slider-buttons button{
  background:rgba(255,255,255,0.18);
  border:1px solid rgba(255,255,255,0.28);
  color:white;
  font-size:28px;
  width:50px;
  height:50px;
  cursor:pointer;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:0.3s;
}

.slider-buttons button:hover{
  background:rgba(255,255,255,0.35);
}

.slider-dots{
  position:absolute;
  bottom:20px;
  width:100%;
  display:flex;
  justify-content:center;
  gap:10px;
  z-index:3;
}

.dot{
  width:12px;
  height:12px;
  background:white;
  opacity:0.45;
  border-radius:50%;
  cursor:pointer;
}

.dot.active{
  opacity:1;
  background:#fff;
}

/* SEÇÕES */
section{
  padding:70px 8%;
  margin-bottom:10px;
  color:white;
}

.section-title{
  font-size:32px;
  margin-bottom:30px;
  color:white;
  text-align:center;
}

/* SOBRE */
.sobre{
  background:var(--azul-claro);
}

.sobre-container{
display:grid;
grid-template-columns:1fr 320px;
gap:60px;
align-items:center;
max-width:1100px;
margin:auto;
}

.sobre-img{
display:flex;
justify-content:center;
align-items:center;
}

.sobre-img img{
width:240px;
height:auto;

opacity:0.85;

filter:brightness(1.1);

transition:all 0.4s ease;

border-radius:12px;

padding:18px;

background:rgba(255,255,255,0.08);

border:1px solid rgba(255,255,255,0.18);

box-shadow:0 8px 25px rgba(0,0,0,0.18);
animation:logoFloat 5s ease-in-out infinite;
}

@keyframes logoFloat{
0%{transform:translateY(0);}
50%{transform:translateY(-6px);}
100%{transform:translateY(0);}
}


.sobre-img img:hover{
transform:scale(1.05) translateY(-4px);

box-shadow:0 14px 35px rgba(0,0,0,0.28);

filter:brightness(1.2);
}


.sobre-texto{
  text-align:center;
}

.sobre-texto .section-title{
  text-align:center;
}

.sobre-texto p{
  max-width:760px;
  margin:0 auto 15px;
  line-height:1.7;
  color:var(--texto-suave);
}

.sobre-numeros{
  display:flex;
  justify-content:center;
  gap:30px;
  margin-top:40px;
  flex-wrap:wrap;
}

.numero{
  background:var(--card-bg);
  padding:25px 35px;
  border-radius:10px;
  box-shadow:var(--shadow);
  text-align:center;
  transition:0.3s;
  border:1px solid var(--card-border);
  min-width:180px;
}

.numero:hover{
  transform:translateY(-6px);
}

.numero h3{
  font-size:40px;
  color:white;
  margin-bottom:5px;
}

.numero p{
  font-size:14px;
  color:#eefbff;
  margin:0;
}

/* DIFERENCIAIS */
.diferenciais{
  background:var(--azul-escuro);
}

.diferenciais-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
}

.dif-card{
  background:var(--card-bg);
  padding:30px;
  border-radius:10px;
  box-shadow:var(--shadow);
  border:1px solid var(--card-border);
  color:white;
  transition:0.3s;
}

.dif-card:hover{
  transform:translateY(-8px);
  box-shadow:0 10px 25px rgba(0,0,0,0.22);
}

/* SERVIÇOS */
.servicos{
  background:var(--azul-escuro);
}

.services-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
}

.service-card{
  overflow:hidden;
}

.service-gallery{
  display:grid;
  grid-template-columns:2fr 1fr;
  grid-template-rows:1fr 1fr;
  gap:8px;
  margin-bottom:18px;
}

.service-gallery img{
  width:100%;
  height:100%;
  min-height:120px;
  object-fit:cover;
  border-radius:8px;
  transition:0.35s;
  cursor:pointer;
}

.service-gallery img:first-child{
  grid-row:1 / span 2;
  min-height:248px;
}

.service-gallery img:hover{
  transform:scale(1.04);
}

@media(max-width:768px){
  .service-gallery{
    grid-template-columns:1fr;
    grid-template-rows:auto;
  }

  .service-gallery img:first-child{
    grid-row:auto;
    min-height:180px;
  }

  .service-gallery img{
    min-height:180px;
  }
}


.service-gallery img:hover{
  transform:scale(1.04);
}

@media(max-width:768px){
  .service-gallery{
    grid-template-columns:1fr;
  }

  .service-gallery img{
    height:180px;
  }
}

.service-card:hover{
  transform:translateY(-8px);
  box-shadow:0 10px 25px rgba(0,0,0,0.22);
}

.service-card h3{
  margin-bottom:15px;
  color:white;
}

.service-card p{
  color:#eefbff;
  line-height:1.6;
  font-size:14px;
}

/* EQUIPAMENTOS */
.equipamentos{
  background:var(--azul-claro);
}

.equip-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
}

.equip-card{
  background:var(--card-bg);
  padding:25px;
  border-radius:10px;
  box-shadow:var(--shadow);
  border:1px solid var(--card-border);
  transition:0.3s;
}

.equip-card:hover{
  transform:translateY(-8px);
  box-shadow:0 10px 25px rgba(0,0,0,0.22);
}

/* MÃO DE OBRA / PARAFUSOS */
.mao-obra,
.parafusos{
  background:var(--azul-claro);
  text-align:center;
}

.lista-servicos{
  max-width:800px;
  margin:0 auto;
  line-height:1.9;
  color:#eefbff;
  list-style-position:inside;
}

.center{
  max-width:800px;
  margin:0 auto;
  color:#eefbff;
}

/* CRC */
.crc-certificado{
background:var(--azul-claro);
text-align:center;
}

.crc-imagem{
max-width:900px;
margin:auto;
}

.crc-imagem img{
width:100%;
height:auto;
border:1px solid #999;
box-shadow:0 10px 25px rgba(0,0,0,0.25);
border-radius:4px;
cursor:pointer;
transition:0.3s;
}

.crc-imagem img:hover{
transform:scale(1.02);
}

/* CLIENTES */
.clientes{
  background:var(--azul-claro);
  text-align:center;
}

.clientes-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:40px;
  align-items:center;
}

.clientes-grid img{
  width:100%;
  max-width:120px;
  margin:auto;
  filter:grayscale(100%);
  opacity:0.9;
  transition:0.3s;
  background:rgba(255,255,255,0.08);
  padding:10px;
  border-radius:8px;
}

.clientes-grid img:hover{
  filter:none;
  opacity:1;
  transform:scale(1.05);
}

/* GALERIA */
.gallery{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:15px;
}

.gallery img{
  width:100%;
  border-radius:6px;
  cursor:pointer;
  transition:0.4s;
}

.gallery img:hover{
  transform:scale(1.05);
}

/* DADOS */
.dados-empresa{
  background:var(--azul-escuro);
}

.dados-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:40px;
}

.dados-grid h3{
  margin-bottom:12px;
}

.dados-grid p{
  margin-bottom:8px;
  color:#eefbff;
}

/* FOOTER */
footer{
  background:var(--azul-escuro);
  color:white;
  text-align:center;
  padding:25px;
}

/* WHATSAPP */
.whatsapp{
  position:fixed;
  bottom:25px;
  right:25px;
  background:#25D366;
  color:white;
  padding:14px 22px;
  border-radius:40px;
  text-decoration:none;
  font-weight:bold;
  box-shadow:0 5px 20px rgba(0,0,0,0.3);
  border:1px solid rgba(255,255,255,0.3);
  z-index:200;
}

/* REVEAL */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:all 0.8s ease;
}

.reveal.active{
  opacity:1;
  transform:translateY(0);
}

/* RESPONSIVO */
@media(max-width:900px){
  .hero{
    height:auto;
    min-height:700px;
    padding-top:100px;
    padding-bottom:80px;
  }

  .hero-top{
    height:auto;
    padding:15px 20px;
    flex-direction:column;
    gap:12px;
  }

  .hero-logo img{
    height:55px;
  }

  .hero-menu{
    flex-wrap:wrap;
    justify-content:center;
    gap:18px;
  }

  .hero-menu a{
    font-size:14px;
  }

  .hero-certificacao{
    align-items:center;
    text-align:center;
  }

  .hero-certificacao img{
    max-width:150px;
  }

  .hero h1{
    font-size:34px;
  }

  .hero p{
    font-size:16px;
  }

  .crc-box-modelo{
    grid-template-columns:1fr;
    text-align:center;
  }

  .crc-info-grid{
    grid-template-columns:1fr;
  }

  .crc-razao{
    grid-column:auto;
  }

  .crc-alerta-modelo{
    text-align:center;
  }
}

@media(max-width:768px){
  .hero{
    min-height:640px;
    padding-top:120px;
  }

  .hero h1{
    font-size:28px;
  }

  .hero p{
    font-size:15px;
  }

  .slider-buttons{
    padding:0 10px;
  }

  .slider-buttons button{
    width:42px;
    height:42px;
    font-size:24px;
  }

  .section-title{
    font-size:28px;
  }

  .whatsapp{
    right:15px;
    bottom:15px;
    padding:12px 18px;
    font-size:14px;
  }
}
@media(max-width:900px){

.sobre-container{
grid-template-columns:1fr;
text-align:center;
}

.sobre-img{
margin-top:30px;
}

}

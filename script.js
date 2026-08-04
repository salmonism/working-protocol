const works = [
  {id:1,title:"두 사람 Twins",year:"2024",medium:"Oil on Linen canvas",dimensions:"90.9x65.1cm",description:"도시에 덩그러니 놓여진 화분 둘. 콘크리트 아래에서 서로 의지하며 서 있는 두 사람.",vimeo:"https://vimeo.com/1214919920",image:"assets/works/work-01-2.jpg",x:6.64,y:16.62,w:12.01,h:29.89},
  {id:2,title:"이파리 Ipari",year:"2022",medium:"Gouache on paper",dimensions:"57.5x76cm",description:"산책길에 발견한 이파리들을 계절이 바뀔 때마다 관찰하며 사진으로 담았었다. 그 모습을 보면서 서로 비슷해 보이지만 각자만의 삶을 살아가는 사람들을 떠올렸다. 이파리 하나 하나의 색을 다르게 표현했는데, 이파리 하나가 하나가 개별의 삶이라는 것을 드러내며, 그들이 가진 고유성을 살리고 싶었다.",vimeo:"https://vimeo.com/1215136023",image:"assets/works/work-02-2.jpg",x:21.34,y:22.46,w:16.06,h:23.08},
  {id:3,title:"키위새 현악 5중주",year:"2025",medium:"Oil on Linen canvas",dimensions:"65.1x53cm",description:"도시에서 살아가는 날지 못하는 키위새 무리들, 낯선 곳을 향해 퍼덕퍼덕 날개를 기울인다.",vimeo:"VIMEO_LINK_03",image:"assets/works/work-03-2.jpg",x:40.19,y:22.81,w:9.82,h:22.99},
  {id:4,title:"달잡이 Lyric City, Dal",year:"2024",medium:"Acrylic on Linen Canvas",dimensions:"65.1x53cm ",description:"우리들은 저 달을 마치 잡을 수 있는 것처럼 뻗고 또 뻗었다.",vimeo:"https://vimeo.com/1215184666",image:"assets/works/work-04-2.jpg",x:52.15,y:22.99,w:8.74,h:22.99},
  {id:5,title:"그녀들의 계절",year:"2026",medium:"Oil on Canvas",dimensions:"45.5x91cm",description:"당신의 찬란한 시간들.",vimeo:"https://vimeo.com/1215182360",image:"assets/works/work-05-2.jpg",x:62.16,y:23.70,w:17.33,h:18.57},
  {id:6,title:"Iris shadow",year:"2018",medium:"Ink on Paper",dimensions:"40x30cm",description:"어느 날, 늘 가던 산책길에서 나무가 조용히 눈을 감고 낮잠을 자고 있었다.",vimeo:"VIMEO_LINK_06",image:"assets/works/work-06-2.jpg",x:80.66,y:23.78,w:9.28,h:20.16},
  {id:7,title:"비올레타의 방",year:"2025",medium:"Oil on Linen canvas",dimensions:"65.1x53cm",description:"클라우디아에게 꽃을 선물받은 비올레타는 방에다가 소중하게 꽂아두었다.",vimeo:"https://vimeo.com/1215080900",image:"assets/works/work-07-2.jpg",x:7.08,y:49.34,w:10.35,h:23.70},
  {id:8,title:"클라우디아 거실",year:"2025",medium:"Oil on Linen canvas",dimensions:"65.1x53cm",description:"클라우디아의 어느 오후 햇살이 비치는 탁자.",vimeo:"https://vimeo.com/1215381613",image:"assets/works/work-08-2.jpg",x:19.29,y:48.98,w:10.69,h:24.14},
  {id:9,title:"이파리 Ipari",year:"2021",medium:"Gouache on paper",dimensions:"36x26cm",description:"작은 이파리들이 봄을 불렀다.",vimeo:"https://vimeo.com/1215381611",image:"assets/works/work-09-2.jpg",x:32.32,y:48.54,w:7.96,h:18.21},
  {id:10,title:"꽃더미",year:"2023",medium:"Ink on paper",dimensions:"29.7x21cm",description:"튤립요정이 두고간 꽃더미들.",vimeo:"VIMEO_LINK_10",image:"assets/works/work-10-2.jpg",x:42.38,y:48.63,w:7.13,h:17.42},
  {id:11,title:"The Woman who ran",year:"2018",medium:"Ink on Paper",dimensions:"30x40cm",description:"어디론가 도망치는 여자.",vimeo:"https://vimeo.com/1215381614",image:"assets/works/work-11-2.jpg",x:51.12,y:48.72,w:10.79,h:16.71},
  {id:12,title:"겹의 상태I",year:"2026",medium:"Oil pastel on board paper",dimensions:"작품 크기 입력",description:"꽃을 이루는 여러 겹의 층위를 인간의 기억에 은유한 작업으로, 기억이 축적되고 중첩되며 변화하는 과정을 화면 위에 드러내고자 했다.",vimeo:"https://vimeo.com/1215381612",image:"assets/works/work-12-2.jpg",x:62.84,y:43.77,w:12.99,h:20.07},
  {id:13,title:"와글 와글 II",year:"2026",medium:"Oil pastel on canvas",dimensions:"40.9x31.8cm",description:"다양한 모습을 가진 사람들이 와글와글 모여있는 모습을 꽃으로 형상화하여 표현했다.",vimeo:"https://vimeo.com/1215174609",image:"assets/works/work-13-2.jpg",x:76.76,y:43.94,w:7.62,h:17.15}
];

const $ = (id) => document.getElementById(id);
function openDialog(dialog){
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

const layer = $("hotspotLayer");
const workDialog = $("workDialog");
const videoFrame = $("vimeoFrame");
const videoPlaceholder = $("videoPlaceholder");
const workImage = $("workImage");
let currentWorkIndex = 0;
let currentVimeoData = null;

function addHotspot({x,y,w,h,label,onClick,className=""}){
  const b=document.createElement("button");
  b.type="button";
  b.className=`hotspot ${className}`;
  b.dataset.label=label;
  b.setAttribute("aria-label",label);
  Object.assign(b.style,{left:`${x}%`,top:`${y}%`,width:`${w}%`,height:`${h}%`});
  b.addEventListener("click",onClick);
  layer.appendChild(b);
}

function getVimeoVideoData(url){
  if(!url || url.startsWith("VIMEO_LINK_")) return null;
  try{
    const parsed=new URL(url);
    if(!parsed.hostname.includes("vimeo.com")) return null;
    const parts=parsed.pathname.split("/").filter(Boolean);
    const videoIndex=parts.indexOf("video");
    const idCandidate=videoIndex>=0 ? parts[videoIndex+1] : parts.find(part=>/^\d+$/.test(part));
    if(!idCandidate) return null;
    return {id:idCandidate,hash:parsed.searchParams.get("h") || ""};
  }catch{
    return null;
  }
}

function getVimeoEmbedUrl(data, autoplay=false){
  if(!data) return "";
  const params = new URLSearchParams({
    title:"0",
    byline:"0",
    portrait:"0",
    dnt:"1",
    playsinline:"1",
    controls:"1",
    muted:"0",
    loop:"0"
  });
  if(data.hash) params.set("h",data.hash);
  if(autoplay) params.set("autoplay","1");
  return `https://player.vimeo.com/video/${data.id}?${params.toString()}`;
}

function resetVideo(){
  videoFrame.classList.remove("is-visible");
  videoFrame.src="";
  videoFrame.hidden=true;
  videoPlaceholder.hidden=true;
  currentVimeoData=null;
}

function prepareVideo(work){
  resetVideo();
  currentVimeoData=getVimeoVideoData(work.vimeo);
  if(!currentVimeoData){
    videoPlaceholder.hidden=false;
    return;
  }

  // 작품을 클릭한 사용자 동작 안에서 iframe을 생성해 음성 자동재생을 시도합니다.
  // 브라우저가 음성 자동재생을 막는 경우 플레이어의 재생 버튼을 한 번 누르면 됩니다.
  videoFrame.src=getVimeoEmbedUrl(currentVimeoData,true);
  videoFrame.hidden=false;
  requestAnimationFrame(()=>videoFrame.classList.add("is-visible"));
}

function renderWork(index){
  currentWorkIndex=(index+works.length)%works.length;
  const work=works[currentWorkIndex];
  prepareVideo(work);
  workImage.src=work.image;
  workImage.alt=work.title;
  $("workNumber").textContent=`WORK ${String(work.id).padStart(2,"0")}`;
  $("workTitle").textContent=work.title;
  $("workYear").textContent=work.year;
  $("workMedium").textContent=work.medium;
  $("workDimensions").textContent=work.dimensions;
  $("workDescription").textContent=work.description;
  $("workPosition").textContent=`${currentWorkIndex+1} / ${works.length}`;
  workDialog.querySelector(".info-section").scrollTop=0;
}

function openWork(index){
  renderWork(index);
  openDialog(workDialog);
}

function closeWork(){
  resetVideo();
  workImage.removeAttribute("src");
  workDialog.close();
}


works.forEach((work,index)=>addHotspot({...work,label:work.title,onClick:()=>openWork(index)}));
addHotspot({x:5.0,y:5.0,w:12.5,h:5.0,label:"Instagram @sallyyangart",onClick:()=>window.open("https://www.instagram.com/sallyyangart","_blank","noopener,noreferrer")});
addHotspot({x:71.0,y:84.0,w:14.5,h:7.5,label:"Artist statement",className:"statement-hotspot",onClick:()=>openDialog($("statementDialog"))});
addHotspot({x:92.0,y:4.0,w:7.8,h:49.0,label:"비모어 서문",onClick:()=>openDialog($("forewordDialog"))});

$("previousWorkButton").addEventListener("click",()=>renderWork(currentWorkIndex-1));
$("nextWorkButton").addEventListener("click",()=>renderWork(currentWorkIndex+1));
$("workCloseButton").addEventListener("click",closeWork);
workDialog.addEventListener("click",e=>{if(e.target===workDialog)closeWork()});
workDialog.addEventListener("cancel",e=>{e.preventDefault();closeWork()});

document.addEventListener("keydown",e=>{
  if(!workDialog.open) return;
  if(e.key==="ArrowLeft") renderWork(currentWorkIndex-1);
  if(e.key==="ArrowRight") renderWork(currentWorkIndex+1);
});

[["statementDialog","statementCloseButton"],["forewordDialog","forewordCloseButton"]].forEach(([d,c])=>{
  const dialog=$(d);
  $(c).addEventListener("click",()=>dialog.close());
  dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
});

const helpDialog=$("helpDialog"), helpFrame=$("helpVimeoFrame"), helpPlaceholder=$("helpVideoPlaceholder");
const HELP_VIMEO_URL="VIMEO_HELP_LINK";
function closeHelp(){helpFrame.src="";helpDialog.close()}
$("helpButton").addEventListener("click",()=>{
  const videoData=getVimeoVideoData(HELP_VIMEO_URL);
  helpFrame.src=getVimeoEmbedUrl(videoData,false);
  helpFrame.hidden=!videoData;
  helpPlaceholder.hidden=Boolean(videoData);
  openDialog(helpDialog);
  helpDialog.querySelector(".text-card").scrollTop=0;
});
$("helpCloseButton").addEventListener("click",closeHelp);
helpDialog.addEventListener("click",e=>{if(e.target===helpDialog)closeHelp()});
helpDialog.addEventListener("cancel",e=>{e.preventDefault();closeHelp()});

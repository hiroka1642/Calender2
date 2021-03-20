'use strict'
{
  const date=document.getElementById('date');


  function getCalender(mp=0){
    const rtoday=new Date();

    const today=new Date(rtoday.getFullYear(),rtoday.getMonth()+mp,rtoday.getDate());  
    let y=today.getFullYear();
    let m=today.getMonth()+1;
    const d=today.getDate();
  
    const prevgetsumatsu=new Date(today.getFullYear(),today.getMonth(),0);
    const getsumatsu=new Date(today.getFullYear(),today.getMonth()+1,0);
  
    let prevMonth=[];
    let thisMonth=[];
    let nextMonth=[];
    let calenderdate=[];
  
  
  
    //タイトルを作る
    function getTitle(){
      const title=document.getElementById('month');
      title.textContent=`${y}年${m}月`
      }
      getTitle();
  
   //カレンダーの配列作り
   //先月の日付を加える
   function makePrevCalender(){
     if(prevgetsumatsu.getDay()===6){
       return;
     }else{
       for(let i=prevgetsumatsu.getDay();0<=i;i--){
         prevMonth.push({
           date:prevgetsumatsu.getDate()-i,
           isToday: false,
           show:false,
         });
       }
     }
   }


   //今月の日付を加える
   function makeThisCalender(){
     for(let i=0;i<getsumatsu.getDate();i++){
       thisMonth.push({
         date:i+1,
         isToday:false,
         show:true,
       })
       if(y===rtoday.getFullYear()&&m===rtoday.getMonth()+1&&thisMonth[i].date=== rtoday.getDate()){
        thisMonth[i].isToday=true;
       }
     }
   }


  //来月の日にちを加える
  function makeNextCalender(){
    for(let i=1;i<7-getsumatsu.getDay();i++){
      if(getsumatsu.getDay()===6){
        return;
      }
      nextMonth.push({
        date:i,
        isToday:false,
        show:false,
      })
    }
    }


    makePrevCalender();
    makeThisCalender();
    makeNextCalender();
  
    function makeCalender(){
      calenderdate=[
        ...prevMonth,
        ...thisMonth,
        ...nextMonth
      ]
    }
    makeCalender();
  
  
  //trにtdを７個ずつ加える
  for(let i=1;i<=calenderdate.length/7;i++){
    //7日ごとにtrを作成
    const newTr=document.createElement('tr');
  
    //一週間ごとに日付データを分ける
    const weekdate=calenderdate.slice(7*(i-1),7*(i));
  
    //tdを作成する
    for(let i=1;i<8;i++){
      const newTd=document.createElement('td');
      newTr.appendChild(newTd);  
      newTd.textContent=weekdate[i-1].date;
      if(weekdate[i-1].isToday){
        newTd.classList.add('today');
      }
      if(weekdate[i-1].show!==true){
        newTd.classList.add('disabled');
      }
    }
    //trに追加する
    date.appendChild(newTr);
  }
  console.log(date);
  
  
  //日曜日にクラスをつける
  
    const trs=date.getElementsByTagName('tr');
  
    for(let i=0;i<5;i++){
      trs[i].firstElementChild.classList.add('sunday')
    }
  
    //土曜日にクラスをつける
    for(let i=0;i<5;i++){
      trs[i].lastElementChild.classList.add('saturday')
    }
  }
    getCalender();


    //要素を削除
    function deltd(){
      for(let i=0;i<36;i++){
        const td=document.getElementsByTagName('td');
        td[0].remove();
        }
      }

      function deltr(){
        for(let i=0;i<7;i++){
         const tr=document.querySelector('tr');
         tr.remove();
       }     
      }

let  mp=0;
const table=document.getElementById('tb');

//前のボタン
const prev=document.getElementById('prev');
prev.addEventListener('click',()=>{

  mp--;
while(table.rows.length>1){
  table.deleteRow(1);
}

  getCalender(mp);

});

//次のボタン
const next=document.getElementById('next');
next.addEventListener('click',()=>{
  mp++;
while(table.rows.length>1){
   table.deleteRow(1);
 }
  getCalender(mp);
});

//todaybtnを押すと今月に切り替わる
const todaybtn=document.getElementById('todaybtn');
todaybtn.addEventListener('click',()=>{
  while(table.rows.length>1){
    table.deleteRow(1);
  } 
  getCalender();
})



}
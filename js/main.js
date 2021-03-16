'use strict'
{

  const today=new Date;  
  const prevgetsumatsu=new Date(today.getFullYear(),today.getMonth(),0);
  const getsumatsu=new Date(today.getFullYear(),today.getMonth()+1,0);
  const nextgetsumatsu=new Date(today.getFullYear(),today.getMonth()+2,0);

  let prevMonth=[];
  let thisMonth=[];
  let nextMonth=[];
  let calenderdate=[];

  console.log(today);
  console.log(today.getDate());
  console.log(getsumatsu);
  console.log(getsumatsu.getDate());

  //prevMonth
  for(let i=0;i<prevgetsumatsu.getDate();i++){
    prevMonth.push(i+1);
  }
  //thisMonthに日付を追加する
  for(let i=0;i<getsumatsu.getDate();i++){
    thisMonth.push(i+1);
  }

  //nextMonth
  for(let i=0;i<nextgetsumatsu.getDate();i++){
    nextMonth.push(i+1);
  }

 
  console.log(prevMonth)
  console.log(thisMonth);
  console.log(nextMonth);
  console.log(prevgetsumatsu.getDay());


//カレンダーの配列作り
//先月の日付を加える
for(let i=0;i<prevgetsumatsu.getDay()+1;i++){
  calenderdate.push(prevgetsumatsu.getDate()-i);
}

//今月の日付を加える
for(let i=0;i<getsumatsu.getDate();i++){
  calenderdate.push(i+1);
}

//来月の日にちを加える
for(let i=1;i<7-getsumatsu.getDay();i++){
  calenderdate.push(i);
}

console.log(calenderdate);

//trにtdを７個ずつ加える
const date=document.getElementById('date');

for(let i=1;i<6;i++){
  //7日ごとにtrを作成
  const newTr=document.createElement('tr');

  //一週間ごとに日付データを分ける
  const weekdate=calenderdate.slice(7*(i-1),7*(i));

  //tdを作成する
  for(let i=1;i<8;i++){
    const newTd=document.createElement('td');
    newTr.appendChild(newTd);  
    newTd.textContent=weekdate[i-1];
  }
  //trに追加する
  date.appendChild(newTr);
}
console.log(date);

//○番目の要素まで、prevクラスをつける
for(let i=0; i<new Date(today.getFullYear(),today.getMonth(),1).getDay();i++){
  date.firstElementChild.children[i].classList.add('prev');
}

//○番目の要素まで、nextクラスをつける
for(let i=0; i<6-getsumatsu.getDay();i++){
  date.lastElementChild.children[6-i].classList.add('next');
}
console.log(date);

//日曜日にクラスをつける

  const trs=date.getElementsByTagName('tr');

  for(let i=0;i<5;i++){
    trs[i].firstElementChild.classList.add('sunday')
  }
  
getElementsByTagName




  //日付の数の番目の数字にtodayクラスをつける
}
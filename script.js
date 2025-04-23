//for tracker.html
let add_button = document.querySelector('#add-button');


let balance;
let totalIncomeis;
let totalExpenseis;

let allValues = {};


// let storage = JSON.parse(localStorage.getItem('values'));
// console.log(storage)



add_button.addEventListener("click",()=>{

   
    let date = document.querySelector('.date').value;
    let amount = Number(document.querySelector('.amount').value);
    let purpose = document.querySelector('.purpose').value;

    let totalIncome = Number(document.querySelector("#totalIncome").textContent);
    let expense =Number(document.querySelector("#expense").textContent);
    let typeOfTransaction = document.querySelector('#type').value;



   if(date =='' ||amount == ''||typeOfTransaction == ''){
    alert("Please Enter All Fields.");
    return;
}



    //income Updating
    if( typeOfTransaction == "income"){
       totalIncomeis = Number(totalIncome)+Number(amount);
       document.querySelector("#totalIncome").innerHTML=`${totalIncomeis}`;

        balance = Number(totalIncomeis) - Number(expense);
       document.querySelector("#balance").innerHTML=`${balance}`;
   
  
    }

    //Expense Updating
    if( typeOfTransaction == "expense"){
         totalExpenseis = Number(expense)+Number(amount);
        document.querySelector("#expense").innerHTML=`${totalExpenseis}`;
         
       
        let balance= Number(totalIncome) - Number(totalExpenseis);
       document.querySelector("#balance").innerHTML=`${balance}`;
     }
 
     let tr = document.createElement('tr');
     tr.setAttribute('data-id', Date.now());
     tr.innerHTML=`<td">${amount}</td>
                <td>${typeOfTransaction}</td>
                <td>${date}</td>
                 <td>${purpose}</td>
                <td>
                    <button class="btn btn-sm delete-button">
                        <img src="./recycle-bin.png" alt="" width="35px">
                    </button>
                </td>`;
               
     table.appendChild(tr);


document.querySelector('.date').value='';
document.querySelector('.amount').value='';
document.querySelector('.purpose').value='';
document.querySelector('#type').value="Transaction Type";

Object.assign(allValues, { date: date },{amount:amount},{purpose:purpose},{transactionType:typeOfTransaction});

localStorage.setItem('values',JSON.stringify(allValues));

})



//deleting Table Row
document.querySelector("#table").addEventListener("click", (e) => {
    if (e.target.closest('.delete-button')) {
        let row = e.target.closest('tr');
        row.remove();
    }
}
 )

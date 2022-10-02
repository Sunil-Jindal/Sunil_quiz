var my_Name = prompt("Enter your name");

console.log(`Hii ${my_Name} let's play game`);

if(my_Name){
    var score = 0;

    function my_Queston(question,option,answers){
        if(score === 5){
            console.log("finish level 1");
        }else if(score === 10){
            console.log("finish level 2");
        }else if(score === 14){
            console.log("finish level 3");
        }else {
            console.log(" ");
        }
    console.log(question);
    console.log(option);

    var user_Answer = prompt("select answer")

    if(this.answer === user_Answer){
        score++;
    }else{
        score--;
    }
}
  

var manyQuestion = [{
    question : '1. Who was the first Indian woman in Space?',
    option : ' (a) Sunita Williams, (b) Koneru Humpy, (c) Kalpana Chawla',
    answers : 'c'
  },
  {
    question : '2. Who was the first Man to Climb Mount Everest Without Oxygen?',
    option : ' (a) Junko Tabei, (b) Reinhold Messner, (c) Phu Dorji',
    answers : 'c'
  },{
    question : '3. Who wrote the Indian National Anthem?',
    option : ' (a) Bakim Chandra Chatterji, (b) Rabindranath Tagore, (c) Swami Vivekanand',
    answers : 'b' 
  },{
    question : '4. Who was the first Indian Scientist to win a Nobel Prize?',
    option : ' (a) CV Raman, (b) Amartya Sen, (c) Hargobind Khorana',
    answers : 'a'
  },{
    question : '5. Who was the first President of India?',
    option : ' (a) Abdul Kalam, (b) Zakir Hussain, (c)  Lal Bahadur Shastri',
    answers : 'b'
  },{
    question : '6.  How many days do we have in a week?',
    option : ' (a) Seven, (b) Two, (c) Nine',
    answers : 'a'
  },{
    question : '7. How many days are there in a normal year?',
    option : ' (a) 300, (b) 200, (c)  365',
    answers : 'c'
  },{
    question : '8. How many colors are there in a rainbow?',
    option : ' (a) 5, (b) 4, (c)  7',
    answers : 'c'
  },{
    question : '9.  Portuguese were the first European to come to India. When did the Portuguese leave India? ',
    option : ' (a)1960, (b) 1961, (c) 1962',
    answers : 'b'
  },{
    question : '10. Who was said to be the last viceroy of India?',
    option : ' (a) Lord Louis Mountbatten, (b) ZaHussain, (c) All',
    answers : 'a'
  },{
    question : '11. Where is the headquarters of the World Economic Forum?',
    option : ' (a) Switzerland, (b) India, (c)  England',
    answers : 'a'
  },{
    question : '12. What is the currency of Iraq?',
    option : ' (a) Iraqi Dollar, (b) Iraqi, (c)  Iraqi Dinar',
    answers : 'c'
  },{
    question : '13. When was the State Bank of India founded?',
    option : ' (a) July 23, 1955, (b) July 11, 1955, (c) July 1, 1955',
    answers : 'c'
  },{
    question : '14.Name any two examples of cryptocurrency.',
    option : ' (a) Bitcoin, Litecoin & Dash, (b)lictcoin, Litecoin & Dash, (c)  Bitcoin, Litecoin & Das',
    answers : 'c'
  },{
    question : '15.  Where is City Birds Wildlife Sanctuary?',
    option : ' (a) Chandigarh, (b) Delhi, (c) Bihar',
    answers : 'a'
  }];


    for(let i=0; i<manyQuestion.length; i++){
        my_Queston(
        (manyQuestion[i].question),
        (manyQuestion[i].option),
        (manyQuestion[i].answers)

        )
    }

    console.log(`${score}`);

}
else{
    console.log("game not work");
}



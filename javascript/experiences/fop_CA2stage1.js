//Name: Lee Hong Yi
//Class: DCITP/1A/02
//Adm: 2223010
//

/*variable declaration*/
input = require("readline-sync")
var m1 = ["Leonardo","Gold", "1 Dec 2019", "1 Jan 1980", "1400"]
var m2 = ["Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", "250"]
var m3 = ["Luther", "Gold", "29 Apr 2020", "16 Mar 1992", "3350"]
var m4 = ["Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", "40200"]
var m5 = ["Amy", "Ruby", "5 Jun 2020", "31 May 2000", "500"]
var memberList = [m1, m2, m3, m4, m5]
var name = "" 
var option = ""
var tf ="true"

function fop_ca2s1(){
/*name input*/
console.log("Welcome to XYZ Membership Loyalty Programme!")
name = input.question("Please enter your name: ")

/*program*/
/*input tree*/
do{
    console.log("\nHi "+ name +", please select your choice:")
    console.log("\t 1. Display all members' information")
    console.log("\t 2. Update points earned")
    console.log("\t 3. Statistics")
    console.log("\t 4. Exit")
    option = input.question("\t >> ")
/*code for output*/
        if (isNaN(option) == false){
            if (option == 1){
                for (count = 0; count < memberList.length; count++){
                    console.log("\nName: " + memberList[count][0])
                    console.log("Membership Type: " + memberList[count][1])
                    console.log("Date Joined: "+ memberList[count][2])
                    console.log("Date of Birth: "+ memberList[count][3])
                    console.log("Points Earned: "+ memberList[count][4])
                    console.log("\n")
                }
            } else if (option == 2){
                console.log("Sorry, work in progress! \n")
            } else if (option == 3){
                console.log("Sorry, work in progress! \n")
            } else if (option == 4){
                console.log("Thank you & goodbye! \n")
                tf = false
            } else {
                console.log("Please enter a valid input. \n")
            }
        } else {
            console.log("Please enter a valid input. \n")
        }
}while(tf)
}
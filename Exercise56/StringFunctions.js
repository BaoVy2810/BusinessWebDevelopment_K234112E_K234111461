function enterData(str)
{
    if (str.trim()=="") return "Please enter some text first"  
    else return str   
}
function countUpperNumber(str)
{
    var count=0
    var i
    for (i=0;i<str.length;i++)
    {
        if (str[i]>='A'&&str[i]<='Z') count++
    }
    return "Number of uppercase characters: " +count
}
function Uppercase(str)
{
    if (str.trim()=="") return "No data"  
    else return str.toUpperCase() 
}
function oneWordPerLine(str)
{
    if (str.trim()=="") return "No data"  
    else return str.trim().split(/\s+/).join("\n") 
}
function Lowercase(str)
{
    if (str.trim()=="") return "No data"  
    else return str.toLowerCase() 
}
function WordCount(str)
{
    if (str.trim()=="") {
        return "Word Count: 0"
    }
        var words=str.trim().split(/\s+/)
    return "Word Count:" + words.length 
}
function countLowerNumber(str)
{
    var count=0
    var i
    for (i=0;i<str.length;i++)
    {
        if (str[i]>='a'&&str[i]<='z') count++
    }
    return "Number of lowercase characters: " +count
}
function printVowelsConsonants(str)
{
    var vowels=str.match(/[aeiouAEIOU]/g)
    var consonants=str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)
    var result = ""
    result += "Vowels: " + (vowels ? vowels.length : 0) +"\n"
    result += "Consonants: " + (consonants ? consonants.length : 0)
    return result
}
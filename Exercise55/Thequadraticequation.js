function find_solution(a,b,c)
{
    if (a!=0) {
        let delta= Math.pow(b,2)-4*a*c
        if (delta<0) return "No solution!"
        else if (delta>0){
            let x1= (-b+Math.sqrt(delta))/(2*a)
            let x2= (-b-Math.sqrt(delta))/(2*a)
            return "x1="+x1+ " ;x2="+x2
        }
        else {
            let x=-b/(2*a)
            return "x1=x2="+x
        }
    }
    else {
        if (b==0 && c==0) return "Infinite solutionå!"
        else if (b==0 && c!=0) return "No solution!"
        else {
            let x=-c/b
            return "x="+x
        }
    }
}
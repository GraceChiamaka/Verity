import Axios from 'axios';
import config from './';

export function formatUrl(url) {
    return config.BASE_URL + url.replace(/[ &#,+()$~%'"*<>{}]/g, '-').toLowerCase();
}

export function indexOf(yyyy, prop, value){
  for(let i=0; i < yyyy.length; i++){

      if(yyyy[i][prop] === value){
          return i;
      }
  }

  return void 0;
}

export async function getContent({url,method='get'}) {
    try {
        const token = session.get('token');
        if(!token){
            throw new Error("Invalid token");
        }
        
        const result = await Axios({
            method,
            url,
            headers : {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization' : `bearer ${token}`
            }
        });
  
        return result.data;
    } catch (err) {
      errorMessage(err);
    }
  }


  export async function postContent({url,data,method='POST',baseUrl=config.BASE_URL}) {
    try {
      const token = session.get('token'),
        headers = {'X-Requested-With': 'XMLHttpRequest'};
        if(!token){
            throw new Error("Invalid token");
        } else{
          headers.Authorization = `bearer ${token}`;
        }
        
      const result = await Axios({
        method,
        url : baseUrl+url,
        data,
        headers
      });
  
      return result.data;
    } catch (err) {
      errorMessage(err);
    }
  }



export function errorMessage(err=void 0){
  if(config.ENV === 'development'){
    console.log(err.response);
  }
  let message;
  if(err.response && err.response.status === 401){
      message = "Authentication failed, Access Denied";
  } else if(err.response){
      message = err.response.data.message;
  } else if(err.message){
      message = err.message;
  } else if(err.response && err.response.status === 404){
    message = "Requested page not found";
  } else{
    message = "Something went wrong"
  }
  throw new Error(message);
};


export const session = {
    set: (key, value)=>{
      if (!key || !value) {return;}
  
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    },

    get: (key)=>{
      var value = localStorage.getItem(key);
  
      if (!value) {return null;}
  
      // assume it is an object that has been stringified
      if (value[0] === "{") {
        value = JSON.parse(value);
      }
  
      return value;
    },

    remove : (key)=>{
      localStorage.removeItem(key);
      return true;
    }
}


export function queryString(params){
  const data = Object.entries(params)
  .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
  .join('&');

  return data;
}

export async function getClasses(){
  try {
      return await getContent({
        url : config.BASE_URL+'/classes',
    });
  } catch (err) {
      throw err;
  }
};

export async function getClassArms(classId){
  try {
      return await getContent({
        url : config.BASE_URL+'/classes/arms/'+classId,
    });
  } catch (err) {
      throw err;
  }
};

export async function getClassSubject(classArmId){
  try {
      return await getContent({
        url : config.BASE_URL+'/classes/arms/subjects/'+classArmId,
    });
  } catch (err) {
      throw err;
  }
};

export async function getAssessment(){
  try {
      return await getContent({
        url : config.BASE_URL+'/assessments',
    });
  } catch (err) {
      throw err;
  }
};

export async function getSessions(classId=void 0,classArmId=void 0){
  try {
      const url = classArmId ? `/classes/arms/sessions/${classId}/${classArmId}` : '/sessions/' ;
    
      return await getContent({
          url : config.BASE_URL+url,
      });

  } catch (err) {
      throw err;
  }
};


export async function getQuizzes({classId=void 0,classArmId=void 0, sessionId=void 0, subjectId=void 0}){
  try {
      return await getContent({
          url : config.BASE_URL+`/classes/arms/sessions/subjects/quizzes/${classId}/${classArmId}/${sessionId}/${subjectId}`,
      });

  } catch (err) {
      throw err;
  }
};


export async function getQuizQuestions(quizId){
  try {
      return await getContent({
          url : config.BASE_URL+`/classes/arms/sessions/subjects/quizzes/question/${quizId}`,
      });

  } catch (err) {
      throw err;
  }
};


export async function getLeftQuestions({classId, subjectId, quizId}){
  try {
      return await getContent({
          url : config.BASE_URL+`/classes/arms/sessions/subjects/quizzes/questions/left/${classId}/${subjectId}/${quizId}`,
      });

  } catch (err) {
      throw err;
  }
};


export async function getWards(parentId){
  try {
    return await getContent({
      url : config.BASE_URL+`/parents/wards/${parentId}`,
    });
  } catch (err) {
    errorMessage(err);
  }
}


export async function getFeeHistory(studentId=void 0){
  try {
    let url = studentId ? config.BASE_URL+`/school-fees/${studentId}` : config.BASE_URL+`/school-fees`;
    return await getContent({url});
  } catch (err) {
    errorMessage(err);
  }
}


export async function getExpenseTypes(){
  try {
    return await getContent({url:config.BASE_URL+'/expense-types/'});
  } catch (err) {
    errorMessage(err);
  }
}


export async function getExpenses(expenseTypeId=void 0, sessionId=void 0){
  try {
    return await getContent({url:config.BASE_URL+`/expenses/${expenseTypeId}/${sessionId}`});
  } catch (err) {
    errorMessage(err);
  }
}

export async function getStats(){
  try {
    return await getContent({url:config.BASE_URL+`/utilities/stats`});
  } catch (err) {
    errorMessage(err);
  }
}


const MILLS = 1000;
const SECONDS = 60;
const HOURS = 60;
const DAYS = 24;
const YEARS = 365;


//////////////////////////////////
const dateInMills = (date) => {
  return date.getTime();
};

// entrata: data di nascita
// uscita: anni attuali

export const getAgeInYears = (str) => {
  const mills = dateInMills(new Date(str));
  const diffMills = Date.now() - mills;

  let years = diffMills / (MILLS * SECONDS * HOURS * DAYS * YEARS);
  return Math.floor(years);
};

///////////////////////////////////

// validare la data del utente

export const isAgeValid = (str) => {
  const years = getAgeInYears(str);

  if (years > 120 || years < 18) {
    return false;
  }

  return true;
};

////////////////////////////


// quanto tempo fà? 
export const howMuchTimeAgo = (mills) => {
  const diff = Date.now() - mills;

  let millsPassed = diff;
  let secondsPassed = Math.floor(millsPassed / MILLS);
  let minutesPassed = Math.floor(secondsPassed / SECONDS);
  let hoursPassed = Math.floor(minutesPassed / HOURS);
  let dayPassed = Math.floor(hoursPassed / DAYS);
  let yearsPassed = Math.floor(dayPassed / YEARS);

  if (yearsPassed > 0) {
    return yearsPassed + (yearsPassed > 1 ? ' anni ' : ' anno ') + 'fa';
  }

  if (dayPassed > 0) {
    return dayPassed + (dayPassed > 1 ? ' giorni ' : ' giorno ') + 'fa';
  }

  if (hoursPassed > 0) {
    return hoursPassed + (hoursPassed > 1 ? ' ore ' : ' ora ') + 'fa';
  }

  if (minutesPassed > 0) {
    return minutesPassed + (minutesPassed > 1 ? ' minuti ' : ' minuto ') + 'fa';
  }

  return 'Poco fa';
};


// here we need to format the time 

//seconds ==> seconds:minutes:hours 

export const transformPodcastDuration = (seconds) => {
    let roundedSeconds = Math.floor(seconds);
    const minutes = Math.floor(roundedSeconds / 60);
    const hours = Math.floor(minutes/60);
    const remainingMinutes = (minutes) - hours*60;
    const remainingSeconds = (roundedSeconds) - remainingMinutes * 60;  
  
    let str = "";
   
  if(hours > 0) {
    str = (hours < 10 ? "0" : "") + hours + ":" + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
    return str;
  }

  
  str = (remainingMinutes < 10 ? "0" : "") + remainingMinutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  return str;
};


export const transformCurrentTiming = (seconds, arr) => {
   const minutes = Math.floor(seconds / 60);
   const hours = Math.floor(minutes/60);
   const remainingMinutes = (minutes) - hours*60;
   const remainingSeconds = (seconds) - remainingMinutes * 60;
  let str = "";
  if(arr.length <= 2) {
     str = (remainingMinutes < 10 ? "0" : "") + remainingMinutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
     return str;
  }else {
    str = (hours < 10 ? "0" : "") + hours + ":" + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
    return str;
  }
};
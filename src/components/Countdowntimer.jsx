// import { useEffect, useState } from 'react';

// const Countdowntimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const endDate = new Date();
//     endDate.setDate(endDate.getDate() + 128);

//     const updateCountdown = () => {
//       const now = new Date().getTime();
//       const distance = endDate - now;

//       if (distance < 0) return;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     };

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center items-center gap-4 text-center text-white font-bold bg-black p-4 rounded-md max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
//       <div><span className="text-xl sm:text-2xl">{timeLeft.days}</span><div className="text-xs sm:text-sm">Days</div></div>
//       <div><span className="text-xl sm:text-2xl">{timeLeft.hours}</span><div className="text-xs sm:text-sm">Hours</div></div>
//       <div><span className="text-xl sm:text-2xl">{timeLeft.minutes}</span><div className="text-xs sm:text-sm">Minutes</div></div>
//       <div><span className="text-xl sm:text-2xl">{timeLeft.seconds}</span><div className="text-xs sm:text-sm">Seconds</div></div>
//     </div>
//   );
// };




// export default Countdowntimer;

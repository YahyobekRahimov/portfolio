export default function Container({ className, children }) {
   return (
      <div
         className={`mx-auto px-[5rem] w-full max-w-[1440px] ${className}`}
      >
         {children}
      </div>
   );
}

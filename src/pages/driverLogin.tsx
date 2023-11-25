export default function driverLogin() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center custom-background">
        <div className="flex flex-col items-center justify-center shadow-md p-10 lg:w-[1290px] lg:h-[600px] bg-[rgba(255,255,255,0.8)] rounded-md">
          <div className=" flex justify-between items-center font-semibold text-white">
            <h1 className="text-6xl font-bold text-black">hello <span className="text-red-600">driver</span>.</h1>
          </div>
        </div>
        <p className="text-white text-xs absolute bottom-0 tracking-widest">
          Copyright &copy; 2023 | Preetham Ananthu | All Rights Reserved
        </p>
      </main>
    </>
  );
}

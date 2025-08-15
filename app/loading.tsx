export default function Loading()
{
    return(
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ease-out`}>
            <img
              src="/shirt-bg.gif" 
              alt="Splash animation"
              className="w-48 h-48 object-contain"
            />
          </div>
    );
}
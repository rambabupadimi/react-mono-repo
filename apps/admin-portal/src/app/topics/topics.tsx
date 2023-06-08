import styles from './topics.module.scss';
import logo from './../../assets/img/ts-logo.png';

/* eslint-disable-next-line */
export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Topics!</h1>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* p-6 = padding */}
      {/* bg-green-200  = background color */}
      {/* flex =  display items in flex */}
      {/* items-center = display items in center */}
      {/* rounded-xl = rounded corners in xl mode 
      rounded
      rounded-md
      rounded-lg
      rounded-full
    */}
      {/* shadow-lg = apply shadow to the box
      shadow
      shadow-md
      shadow-lg
      shadow-xl
      shadow-2xl*/}

      {/* m-8 = add margin all sides 8 */}
      {/* mx-8 = add margin horizontal sides sides */}
      {/* my-8 = add margin vertical sides sides */}

      {/* max-width = set max width 
      max-w-xs = 320px
      max-w-xm = 384px
      max-w-md = 448px
      max-w-lg = 512px
      max-w-xl = 576px
      max-w-2xl = 672px
      ..
      max-w-7xl = 1280px
      max-w-full = 100T
     */}
      {/* space-x-2 = add horizontal space between two elements */}
      {/* space-y-2 = add vertical space between two elements */}

      {/* text-xl = define text size
      text-sm
      text-md
      text-lg
      text-xl
      text-2xl */}

      {/* Responsive design 
        w-16 md:1-32 lg:w-48 
      */}

      <div
        className="p-6  bg-blue-200
                        flex items-center 
                        space-x-4
                        max-w-md
                        rounded-md
                        mx-auto
                        shadow-2xl
                        "
      >
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-black">ChitChat</h4>
          <p className=" text-slate-500">You have a new message!</p>
        </div>
      </div>

      <br />
      <br />
    <div className='grid  lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1'>  
    { [1,2,3,4,5,6,7,8,9].map(item => {
         return (
         <div className="py-8 
          px-8

          mx-4
           bg-white 
           rounded-xl 
           my-4
           shadow-lg 
           space-y-2 
           sm:py-4 
           sm:flex 
           sm:items-center 
           sm:space-y-0
           sm:space-x-6">
            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              src={logo}
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">Erin Lindford</p>
                <p className="text-slate-500 font-medium">Product Engineer</p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Message
              </button>
            </div>
          </div>)
    })}
     </div>
    </div>
  );
}

export default Topics;

import { FeatureCard, NavigationCard } from '../components/Main/Home'
import { faIdCard, faBook, faComments } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    // <!-- ヘッダー -->
    <main>
      <>
        <div className="flex flex-col relative lg:cover object-none">
          <img src={`${process.env.PUBLIC_URL}/top_cover.jpg`} alt="Top Cover" />
          <div className="flex flex-col absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-1/4 text-white">
            <p className="text-4xl xl:text-7xl md:text-6xl text-center lg:text-left font-bold">Hangar Talk</p>
            <p className="text-xl xl:text-5xl md:text-4xl text-center lg:text-left font-bold lg:mt-6 mt-1">パイロットのための<br />フライト管理SNS</p>
          </div>
          <div className="hidden lg:flex lg:absolute lg:top-1/2 lg:left-3/4 lg:-translate-y-1/2 lg:-translate-x-1/2">
            <NavigationCard />
          </div>
        </div>
        {/* <!-- コンテンツ --> */}
        <div className="flex lg:justify-evenly justify-center flex-wrap mt-8">
          <FeatureCard
            fontawesomeIcon={faIdCard}
            caption={"操縦ライセンスの\n有効期限を管理"}
            text="あなたのライセンスの有効期限を管理。登録したライセンスはいつでも管理画面から確認できます。"
          />
          <FeatureCard
            fontawesomeIcon={faBook}
            caption={"パイロットの\nフライトログブックを管理"}
            text="あなたのフライトログブックを登録すれば、面倒な計算作業から解放されます。"
          />
          <FeatureCard
            fontawesomeIcon={faComments}
            caption={"パイロット同士で\n交流"}
            text="登録したフライト記録をフィードにシェア。友達と共に、フライトについてとことん語り合うことができます。"
          />
        </div>
        {/* <!--  --> */}
        <div className='flex justify-center mx-auto m-8'>
          <div className=''>
            <p className="text-xl font-bold text-gray-800 leading-normal underline underline-offset-4 text-center my-2">あなたのフライトを<br />シェアしよう！</p>
            <div className="w-108 lg:w-120 h-108 bg-white border border-gray-300 mt-8 rounded-lg shadow-lg px-4 py-2 mx-4 overflow-auto">
              {/* <%= render partial: "microposts/top_micropost_card", collection: @microposts, as: :micropost %> */}
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="flex lg:hidden">
          <div className="flex flex-col mx-auto">
            {/* <!-- ボーダー（始まり） --> */}
            <div className="w-full border-b-2 border-gray-300 py-2 mb-8 mx-auto"></div>
            {/* <!-- ボーダー（終わり） --> */}
            <p className="text-xl font-bold text-gray-800 leading-normal underline underline-offset-4 text-center my-2">いますぐ登録しよう！</p>
            <div className="mt-6 mx-4">
              <NavigationCard />
            </div>
          </div>
        </div>
      </>
    </main>
  )
}
export default Home
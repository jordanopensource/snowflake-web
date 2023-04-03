import Snowflake from '@/components/Snowflake';
import grid from '@/styles/grid.module.css';
import heading from '@/styles/headings.module.css';
import list from '@/styles/List.module.css';
import Link from 'next/link'
import Card from '@/components/Card';


export default function Home() {
  return (
    <>
    <div className='bg-darkPurple'>
        <div className={grid.gridTwelve}>
        <Snowflake></Snowflake>

        <div className="p-10 pb-0 md:p-0 md:col-end-8 md:col-start-5 md:row-start-1 mt-5 md:pr-6 lg:p-0">
          <h2 className={heading.headingTwo}>شارك حرية الانترنت</h2>
          <ul className={list.List}>
            <li className={list.Items}>اضغط الزر</li>
            <li className={list.Items}>لا تغلق الصفحة</li>
            <li className={list.Items}>عد لتفقد كم شخصًا ساعدت!</li>
          </ul>
        </div>

        <div className="p-10  md:p-0 text-right w-full md:col-start-13 md:col-end-1 md:mr-0 md:row-start-2 lg:col-end-4 lg:col-start-1 lg:row-start-1">
          <p className='fontSize-5xl'>
          يمكنك مساعدة الأشخاص على تجاوز الرقابة من خلال تمكين وكيل سنوفليك على يمينك. بمجرد أن تتحول أيقونة ندفة الثلج إلى اللون الأخضر، فهذا يعني أن المستخدم في بلد خاضع للرقابة يتصل من خلال وكيلك للوصول إلى الإنترنت دون قيود.
          </p>
          <br></br>

          <p>هذا المشروع مستضاف من قبل <Link className='underline' href="https://josa.ngo/">جوسا</Link> عن طريق <Link className='underline' href="https://www.torproject.org/">مشروع تور</Link></p>
        </div>

        </div>
      </div>


      {/* cards */}
      <Card imagePath='/images/map.svg'>
        <h2 className={heading.headingTwo}>شبكة تور</h2>
        <p>
           لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        </p>

      </Card>

      <Card>
        <h2 className={heading.headingTwo}>برررر</h2>
        <p>
           لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        </p>

      </Card>

      <Card>
      <h2 className={heading.headingTwo}>بسبس</h2>
        <p>
           لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        </p>

      </Card>
    

    </>
  );
}

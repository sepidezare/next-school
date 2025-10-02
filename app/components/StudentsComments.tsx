export default function StudentsComments()
{
return(
/* <section className="py-16 bg-gradient-to-b from-[#0a2d36] to-[#073e4a]"> */
  <section className="py-16 bg-white">


  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-4">Отзывы наших студентов</h2>
    <p className="text-xl text-center mb-12 text-gray-300 max-w-2xl mx-auto">
      Узнайте, что говорят наши студенты со всего мира о своем опыте обучения
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">А</span>
          </div>
          <div>
            <h4 className="font-bold">Анна Коваль</h4>
            <p className="text-sm text-gray-400">Польша</p>
          </div>
        </div>
        <div className="flex text-[#2dffe6] mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300">
          "За 6 месяцев обучения смогла начать свободно общаться с русскими коллегами. Преподаватели очень внимательные и профессиональные!"
        </p>
      </div>
      
      {/* Testimonial 2 */}
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">М</span>
          </div>
          <div>
            <h4 className="font-bold">Марко Риччи</h4>
            <p className="text-sm text-gray-400">Италия</p>
          </div>
        </div>
        <div className="flex text-[#2dffe6] mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300">
          "Изучаю русский для бизнеса. Уроки очень структурированные, материал подается понятно. Уже могу вести переговоры с партнерами!"
        </p>
      </div>
      
      {/* Testimonial 3 */}
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">С</span>
          </div>
          <div>
            <h4 className="font-bold">София Мюллер</h4>
            <p className="text-sm text-gray-400">Германия</p>
          </div>
        </div>
        <div className="flex text-[#2dffe6] mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300">
          "Готовилась к экзамену ТРКИ. Благодаря индивидуальному подходу преподавателя сдала на отлично! Спасибо за качественную подготовку."
        </p>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <button className="border border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] px-6 py-2 rounded-full font-medium transition-colors">
        Все отзывы
      </button>
    </div>
  </div>
</section>

);
}
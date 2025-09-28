// app/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#edf7e7] text-[#19232d] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#073e4a] text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Добро пожаловать в <span className="text-[#01a08e]">Онлайн Школу</span>
            </h1>
            <p className="text-lg mb-8">
              Современные курсы и интерактивные уроки для детей и взрослых. Учитесь удобно, быстро и эффективно.
            </p>
            <a
              href="#courses"
              className="inline-block bg-[#2dffe6] text-[#073e4a] font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Начать обучение
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero-image.png" // Replace with your school hero image
              alt="Online School"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#073e4a] to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Наши Преимущества</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[#01a08e] text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Интерактивные Курсы</h3>
              <p>Обучение с интересными заданиями и живыми примерами, чтобы знания усваивались легко.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[#2dffe6] text-4xl mb-4">🧑‍🏫</div>
              <h3 className="text-xl font-bold mb-2">Опытные Преподаватели</h3>
              <p>Наши учителя помогут каждому ученику раскрыть свой потенциал и достичь успеха.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[#073e4a] text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2">Удобная Онлайн Платформа</h3>
              <p>Учитесь где угодно и когда угодно с нашей простой и безопасной платформой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#01a08e] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать обучение прямо сейчас?
          </h2>
          <p className="mb-8">
            Присоединяйтесь к нашей онлайн школе и откройте новые возможности для себя и своих детей.
          </p>
          <a
            href="#"
            className="inline-block bg-[#073e4a] text-[#2dffe6] font-bold px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Зарегистрироваться
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#19232d] text-white py-6 text-center">
        © {new Date().getFullYear()} Онлайн Школа. Все права защищены.
      </footer>
    </main>
  );
}

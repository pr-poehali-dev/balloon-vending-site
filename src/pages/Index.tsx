import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🎈</div>
            <span className="text-xl font-bold text-primary">BalloonVend</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
            <a href="#franchise" className="text-gray-600 hover:text-primary transition-colors">Франшиза</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="animate-float">
                <img 
                  src="https://cdn.poehali.dev/files/c13a999c-0618-4711-b924-a55795b8a6c2.png" 
                  alt="Вендинговый автомат для шаров" 
                  className="w-80 h-80 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Вендинговые автоматы воздушных шаров
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Революционная бизнес-модель! Автоматизированная продажа воздушных шаров в торговых центрах, парках и развлекательных зонах
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
                <Icon name="Rocket" className="mr-2" />
                Начать бизнес
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-secondary text-secondary hover:bg-secondary/10">
                <Icon name="Play" className="mr-2" />
                Посмотреть видео
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-bounce-slow">
                <div className="text-6xl mb-4">🎈</div>
                <div className="text-4xl font-bold text-primary">24/7</div>
                <p className="text-gray-600">Работает круглосуточно</p>
              </div>
              <div className="text-center animate-bounce-slow" style={{animationDelay: '1s'}}>
                <div className="text-6xl mb-4">💰</div>
                <div className="text-4xl font-bold text-secondary">+300%</div>
                <p className="text-gray-600">Рентабельность</p>
              </div>
              <div className="text-center animate-bounce-slow" style={{animationDelay: '2s'}}>
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-4xl font-bold text-orange">2 месяца</div>
                <p className="text-gray-600">Окупаемость</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества автоматов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Zap" className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Быстрая установка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Монтаж и настройка за 1 день. Готовы к работе сразу после установки.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <Icon name="Clock" className="w-10 h-10 text-secondary mb-2" />
                <CardTitle>Автономность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Минимальное обслуживание. Пополнение товара 1 раз в неделю.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange">
              <CardHeader>
                <Icon name="TrendingUp" className="w-10 h-10 text-orange mb-2" />
                <CardTitle>Высокий доход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">До 150,000₽ чистой прибыли в месяц с одного автомата.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Shield" className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">2 года гарантии на оборудование и круглосуточная поддержка.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Условия франшизы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к успешной сети и начните зарабатывать уже через месяц
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl">Стартовый пакет</CardTitle>
                  <div className="text-3xl font-bold text-primary">490,000₽</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    1 автомат с полной комплектацией
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    Обучение и сертификация
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    Маркетинговые материалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    Поддержка 6 месяцев
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl">Премиум пакет</CardTitle>
                  <div className="text-3xl font-bold text-secondary">890,000₽</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    2 автомата в разных локациях
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    VIP обучение и наставничество
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    Индивидуальная реклама
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    Поддержка 12 месяцев
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                    Приоритет в выборе мест
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-secondary text-black hover:bg-secondary/90">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-4">Что входит в франшизу?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Icon name="Settings" className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Оборудование</h3>
                  <p className="text-gray-600">Современные автоматы с сенсорным управлением</p>
                </div>
                <div className="text-center">
                  <Icon name="BookOpen" className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Обучение</h3>
                  <p className="text-gray-600">Полный курс по ведению бизнеса</p>
                </div>
                <div className="text-center">
                  <Icon name="Handshake" className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Поддержка</h3>
                  <p className="text-gray-600">Техническая и маркетинговая поддержка</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600">
                Готовы ответить на все вопросы и помочь начать ваш бизнес
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Оставьте заявку</CardTitle>
                  <CardDescription>
                    Мы перезвоним в течение 30 минут и проконсультируем по всем вопросам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="text-lg p-3" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" type="tel" className="text-lg p-3" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" className="text-lg p-3" />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Расскажите о ваших планах..." 
                        className="text-lg p-3 min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full text-lg py-3 bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-500">Звоните с 9:00 до 21:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Mail" className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@balloonvend.ru</p>
                      <p className="text-sm text-gray-500">Отвечаем в течение часа</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" className="w-6 h-6 text-orange mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Офис</h3>
                      <p className="text-gray-600">г. Москва, ул. Тверская, 15</p>
                      <p className="text-sm text-gray-500">Приходите на встречу</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <Icon name="Clock" className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Быстрый старт!</h3>
                    <p className="text-sm text-gray-600">
                      Запуск первого автомата через 2 недели после подписания договора
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-3xl">🎈</div>
              <span className="text-2xl font-bold">BalloonVend</span>
            </div>
            <p className="text-gray-400 mb-6">
              Превращаем праздники в прибыльный бизнес
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Icon name="MessageCircle" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Icon name="Youtube" className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
              © 2024 BalloonVend. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
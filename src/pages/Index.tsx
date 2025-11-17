import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const windows = [
    {
      title: 'Пластиковые окна',
      description: 'Энергоэффективные окна с двойным стеклопакетом',
      price: 'от 8 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5787da1f-792e-40bd-92a2-7ea2ae6ce7ba/files/f7be3119-f395-4703-a8af-0be131a4c023.jpg',
      features: ['Шумоизоляция', 'Теплосбережение', 'Долговечность']
    },
    {
      title: 'Остекление балконов',
      description: 'Панорамное остекление с видом на город',
      price: 'от 25 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5787da1f-792e-40bd-92a2-7ea2ae6ce7ba/files/465def5f-4a32-4cca-8979-643b937e3152.jpg',
      features: ['Панорамный вид', 'Утепление', 'Современный дизайн']
    },
    {
      title: 'Профессиональный монтаж',
      description: 'Установка окон любой сложности',
      price: 'от 3 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5787da1f-792e-40bd-92a2-7ea2ae6ce7ba/files/1313e120-067d-4544-9527-7810d5e422e1.jpg',
      features: ['Опытная бригада', 'Гарантия качества', 'Быстрые сроки']
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Гарантия 5 лет', description: 'На все виды работ и материалы' },
    { icon: 'Clock', title: 'Монтаж за 1 день', description: 'Быстрая установка без пыли и грязи' },
    { icon: 'BadgeCheck', title: 'Сертификаты', description: 'Официальный партнер производителей' },
    { icon: 'Headphones', title: 'Поддержка 24/7', description: 'Всегда на связи для консультаций' }
  ];

  const steps = [
    { number: '01', title: 'Заявка', description: 'Оставьте заявку на сайте или позвоните нам' },
    { number: '02', title: 'Замер', description: 'Выезд специалиста для точных замеров' },
    { number: '03', title: 'Производство', description: 'Изготовление окон на современном оборудовании' },
    { number: '04', title: 'Установка', description: 'Профессиональный монтаж за 1 день' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ОкнаПро
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
            <a href="#process" className="text-gray-700 hover:text-primary transition-colors">Как работаем</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Окна и балконы
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  под ключ
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Производство и установка качественных окон с гарантией 5 лет. Бесплатный замер и расчет стоимости.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg group">
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-gray-600">Установленных окон</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-gray-600">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 rounded-full"></div>
              <img
                src={windows[0].image}
                alt="Окна"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Широкий выбор окон и профессиональный монтаж
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {windows.map((window, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative overflow-hidden group">
                  <img
                    src={window.image}
                    alt={window.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-semibold">
                    {window.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{window.title}</CardTitle>
                  <CardDescription className="text-base">{window.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {window.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Icon name="Check" className="text-primary mr-2" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group">
                    Заказать
                    <Icon name="ShoppingCart" size={18} className="ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Как мы работаем
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl font-bold opacity-20 mb-4">{step.number}</div>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold ml-4">{step.title}</h3>
                </div>
                <p className="text-white/90">{step.description}</p>
                {index < steps.length - 1 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute -right-4 top-8 text-white/30" size={32} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Оставьте заявку
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Получите бесплатную консультацию и расчет стоимости
            </p>
            <Card className="border-none shadow-2xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о ваших пожеланиях..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg group">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" className="text-primary" size={28} />
                <span className="text-xl font-bold">ОкнаПро</span>
              </div>
              <p className="text-gray-400">
                Производство и установка качественных окон с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Пластиковые окна</li>
                <li>Остекление балконов</li>
                <li>Монтаж окон</li>
                <li>Ремонт окон</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Наши работы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="Mail" size={18} className="mr-2" />
                  info@oknapro.ru
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  г. Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ОкнаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: 'Автоматизация производства',
      client: 'Промышленный холдинг "Техно"',
      image: 'https://cdn.poehali.dev/projects/4e5fdb25-c261-42ea-b38a-55780a9a0c4d/files/5887c006-cff9-4688-aa2a-745414e58b5c.jpg',
      category: 'Промышленность',
      stats: [
        { label: 'Рост производительности', value: '+45%' },
        { label: 'Снижение затрат', value: '30%' },
        { label: 'Срок внедрения', value: '6 мес' }
      ],
      description: 'Комплексное решение для автоматизации производственных процессов с интеграцией ERP-системы и системы управления оборудованием.',
      technologies: ['Siemens S7', 'WinCC', 'SAP ERP', 'OPC UA']
    },
    {
      id: 2,
      title: 'Умное здание',
      client: 'БЦ "Центральный"',
      image: 'https://cdn.poehali.dev/projects/4e5fdb25-c261-42ea-b38a-55780a9a0c4d/files/40f2f30f-af38-4834-8b85-0ee4ed34f3d9.jpg',
      category: 'Коммерческая недвижимость',
      stats: [
        { label: 'Экономия энергии', value: '40%' },
        { label: 'Окупаемость', value: '2.5 года' },
        { label: 'Площадь объекта', value: '25000 м²' }
      ],
      description: 'Интеллектуальная система управления инженерными системами здания с оптимизацией энергопотребления.',
      technologies: ['KNX', 'BACnet', 'Modbus', 'IoT Platform']
    },
    {
      id: 3,
      title: 'Цифровизация склада',
      client: 'Логистический оператор "Транс-Сервис"',
      image: 'https://cdn.poehali.dev/projects/4e5fdb25-c261-42ea-b38a-55780a9a0c4d/files/3b5b746c-e5df-484a-b96a-66a169927c95.jpg',
      category: 'Логистика',
      stats: [
        { label: 'Скорость обработки', value: '+60%' },
        { label: 'Точность учета', value: '99.8%' },
        { label: 'ROI', value: '18 мес' }
      ],
      description: 'WMS-система с автоматизированной системой управления складскими процессами и интеграцией с 1С.',
      technologies: ['WMS', '1C', 'RFID', 'Barcode']
    }
  ];

  const services = [
    {
      icon: 'Network',
      title: 'Системная интеграция',
      description: 'Проектирование и внедрение комплексных IT-решений для бизнеса'
    },
    {
      icon: 'Cpu',
      title: 'Промышленная автоматизация',
      description: 'АСУТП, SCADA, MES-системы для производственных предприятий'
    },
    {
      icon: 'Building',
      title: 'Умные здания',
      description: 'BMS, системы диспетчеризации и управления инженерными системами'
    },
    {
      icon: 'Database',
      title: 'Интеграция систем',
      description: 'Связка разнородных систем через API, middleware и ETL-процессы'
    },
    {
      icon: 'Shield',
      title: 'Информационная безопасность',
      description: 'Комплексная защита IT-инфраструктуры и данных компании'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка 24/7',
      description: 'Круглосуточная поддержка внедренных систем и оборудования'
    }
  ];

  const partners = [
    'Siemens', 'Schneider Electric', 'ABB', 'Cisco', 
    'Microsoft', 'SAP', '1С', 'Honeywell'
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Layers" size={28} className="text-primary" />
            <span className="text-xl font-bold">TechIntegrator</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'projects', label: 'Проекты' },
              { id: 'services', label: 'Услуги' },
              { id: 'about', label: 'О компании' },
              { id: 'partners', label: 'Партнеры' },
              { id: 'contacts', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button>Заявка на проект</Button>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Комплексные решения для цифровой трансформации бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Системная интеграция, автоматизация производства и внедрение IT-систем с гарантией результата
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('projects')}>
                  <Icon name="FolderOpen" size={20} className="mr-2" />
                  Наши проекты
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in">
              {[
                { icon: 'Award', value: '15+', label: 'Лет на рынке' },
                { icon: 'Briefcase', value: '200+', label: 'Реализованных проектов' },
                { icon: 'Users', value: '50+', label: 'Сертифицированных специалистов' }
              ].map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={stat.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Реализованные проекты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Кейсы с измеримыми результатами и долгосрочным эффектом для бизнеса клиента
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.client}</p>
                      
                      <p className="mb-6">{project.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Технологии:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-background border rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр решений для цифровизации и автоматизации бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
                <p className="text-lg mb-4">
                  TechIntegrator — ведущий системный интегратор с 15-летним опытом реализации сложных IT-проектов для промышленных предприятий и коммерческих компаний.
                </p>
                <p className="text-muted-foreground mb-6">
                  Мы специализируемся на комплексных решениях в области автоматизации, диспетчеризации и цифровой трансформации бизнеса. Наша команда состоит из 50+ сертифицированных инженеров и архитекторов решений.
                </p>
                <div className="space-y-4">
                  {[
                    'Собственный проектный офис и лаборатория',
                    'Сертифицированные партнеры ведущих вендоров',
                    'Гарантия на все выполненные работы',
                    'Техподдержка 24/7 после внедрения'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                {[
                  { icon: 'Target', label: 'Индивидуальный подход' },
                  { icon: 'Clock', label: 'Соблюдение сроков' },
                  { icon: 'TrendingUp', label: 'Измеримый результат' },
                  { icon: 'ShieldCheck', label: 'Прозрачность проекта' }
                ].map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon name={item.icon as any} size={32} className="text-primary mx-auto mb-3" />
                      <p className="font-medium">{item.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-20">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнеры</h2>
              <p className="text-lg text-muted-foreground">
                Сертифицированные партнерства с мировыми лидерами
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center animate-fade-in">
              {partners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg font-semibold text-muted-foreground">{partner}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-lg text-muted-foreground">
                  Обсудим ваш проект и предложим оптимальное решение
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-fade-in">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Адрес</p>
                          <p className="text-muted-foreground">Москва, ул. Профсоюзная, д. 57</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Phone" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Телефон</p>
                          <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Mail" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">info@techintegrator.ru</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Clock" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Режим работы</p>
                          <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Отправить заявку</h3>
                    
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Ваше имя"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Телефон"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <textarea
                          placeholder="Опишите ваш проект"
                          rows={4}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <Button className="w-full" size="lg">
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Layers" size={24} className="text-primary" />
                <span className="text-lg font-bold">TechIntegrator</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Системная интеграция и автоматизация для бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Системная интеграция</li>
                <li>Автоматизация</li>
                <li>Умные здания</li>
                <li>Техподдержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Партнеры</li>
                <li>Вакансии</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@techintegrator.ru</li>
                <li>Москва, Профсоюзная 57</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 TechIntegrator. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

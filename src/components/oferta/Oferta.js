import React from 'react'
import './oferta.scss'
import { ButtonDark } from '../UI/buttonDark/ButtonDark';


export const Oferta = (props) =>{

    const offer = { head: 'Публичная оферта',
                    text: 'ООО "М-Сервис" Приказ 25 декабря 2018г. № оф-25-12-18 г.Москва Об утверждении публичной оферты. В соответствии со статьей 435 и частью 2 статьи 437 Гражданского кодекса Российской Федерации, приказываю: 1.Утвердить предложение оферты в соответствии с приложением №1 к настоящему приказу. 2.Определить срок действия оферты - 31.12.2019 года. 3.Контроль за исполнением взятых обязательств в соответствии с офертой оставляю за собой. Генеральный Директор К.Ю.Сучков Приложение №1 к приказу Генерального Директора ооо "М-Сервис" От 25 декабря 2018г. № оф-25-12-18'}
                 
    const cls = ["ofertaWrap"]
    
    if(props.ofertaShow){cls.push("show")}

    return(
        
        <div className = {cls.join(' ')}>
        <div>
            <h3>{offer.head}</h3>
            {/* <div className = "ofertaText"> */}
            <p>
                ООО "М-Сервис"
                Приказ
                25 декабря 2018г. № оф-25-12-18
                г.Москва
                Об утверждении публичной оферты.
                В соответствии со статьей 435 и частью 2 статьи 437 Гражданского кодекса Российской Федерации, приказываю:<br/>
                1.Утвердить предложение оферты в соответствии с приложением №1 к настоящему приказу.<br/>
                2.Определить срок действия оферты - 31.12.2019 года.<br/>
                3.Контроль за исполнением взятых обязательств в соответствии с офертой оставляю за собой.<br/>
                Генеральный Директор К.Ю.Сучков<br/>
                Приложение №1 к приказу Генерального Директора ооо "М-Сервис" От 25 декабря 2018г. № оф-25-12-18

                Публичная оферта<br/>
                Настоящее предложение является публичной офертой в соответствии со статьей 435 и частью 2 статьи 437 Гражданского кодекса Российской Федерации (далее - оферта).<br/>
                Настоящая оферта определяет взаимоотношения между ООО "М-Сервис" (ОГРН 51877746006564) в лице Генерального директора Кирилла Юрьевича Сучкова, действующего на основании Устава, именуемое в дальнейшем Организация, и физическим или юридическим лицом, принявшим оферту о заключении Договора, именуемый в дальнейшем Клиент.<br/>
                Организация выражает намерение заключить договор с любым физическим лицом или юридическим лицом и гарантирует исполнение взятых на себя в соответствии с договором обязательств.<br/>
                Клиент, от своего имени и отимени любых иных лиц, заинтересованных в определяемых данным договором услугах, принимая данную оферту, выражает свое согласие с тем, что условия настоящего договора не ущемляют законных прав Клиента и любых иных лиц, от имени которых действует Клиент.<br/>
                1. Термины и определения.
                1.1. Под понятием Клиент следует понимать лицо, выразившее согласие на заключение договора (далее по тексту - клиент).<br/>
                1.2. Инфомат - электронно-вычислительная машина, иногда оснащенная дополнительными устройствами (далее по тексту - Инфомат).<br/>
                1.3. Информационная система - автоматизированный комплекс программных средств, управляющий функциями Инфомата (далее по тексту - ИС). ИС включает в себя общесистемное программное обеспечение, драйвера и службы, обеспечивающие работоспособность Инфомата и отдельных элементов (устройств), включенных в состав общего оборудования Инфомата, а также графический интерфейс главной страницы ИС. Ис обеспечивает функционирование всех технических средств и устройств, включенных в состав Инфомата, а также автоматическое восстановление штатной работы всех технических средств и устройств Инфомата в случае сбоев в работе Инфомата. Информационная система не собирает и не обрабатывает персональные данные.<br/>
                1.4. Программное обеспечение - программа, позволяющая клиенту управлять информационным и развлекательным контентом в целях получения удовольствия. Программное обеспечение не собирает и не обрабатывает персональные данные.<br/>
                1.5. Границы (рамки) Программного обеспечения начинаются с главной страницы интерфейса Инфомата и включают в себя поддиректории раздела с каталогами, страницами и ссылками, выраженными как каталоги, страницы и ссылки программного обеспечения, так и сторонних программ.<br/>
                1.6. Электронные очки - это игровая валюта, приобретаемая клиентом в рамках заключаемого договора. Используется для активации игр и фиксирования достигнутого результата.<br/>
                1.7. Таблица рекордов - раздел программного обеспечения, в котором Клиенты могут зафиксировать количество набранных электронных очков.<br/>
                <br/>
                2. Предмет Договора. <br/>
                <br/>
                2.1. Предметом Договора является предоставление Организацией посредством Инфомата информационных и развлекательных услуг с использованием Программного обеспечения.<br/><br/>
                3. Область действия Договора.<br/>
                3.1. Действие настоящего договора распространяется на использование программного обеспечения, установленного на Инфоматах Организации.<br/>
                4. Факт заключения Договора.<br/>
                4.1. Фактом заключения настоящего договора со стороны Клиента, то есть полным и безоговорочным принятием Клиентом условий настоящего Договора и всех приложений настоящему договору, являющихся неотъемлемой частью настоящего Договора и всех приложений настоящего договора, в соответствии с п. 1 ст.438 Гражданского кодекса Российской Федерации, является внесение наличных денежных средств в принимающее купюры (монеты) устройство Инфомата.<br/>
                5. Права и обязанности сторон.<br/>
                5.1. Клиент имеет право:<br/>
                5.1.1. В полной мере получать услуги в рамках использования Программного обеспечения.<br/>
                5.1.2. В любой момент обратиться к инструкции и ознакомиться с правилами просмотра развлекательного контента и правилами использования развлекательного контента.<br/>
                5.1.3. В одностороннем порядке расторгнуть действие настоящего Договора без уведомления Организации.<br/>
                5.1.4. Переуступить право расходования электронных очков, приобретенных клиентом, третьему лицу без уведомления Организации.<br/>
                5.1.5 В случае, если количество очков не равно нулю, зафиксировать в таблице рекордов количество электронных очков в соответствии с правилами использования программного обеспечения. При фиксации текущего количества электронных очков в таблице рекордов, текущее количество электронных очков обнуляется до значения нуля.<br/>
                5.2. Клиент обязуется: <br/>
                5.2.1. Соблюдать все положения настоящего Договора.<br/>
                5.2.2. Соблюдать и придерживаться положения о конфеденциальности, которое предусмотрено настоящим Договором, а также всех взятых на себя обязательств перед Организацией.<br/>
                5.2.3. Не предпринимать никаких действий, а также не использовать никакие приборы или программные продукты, которые могут привести к сбою работы программного обеспечения или Инфомата и его отдельных компонентов.<br/>
                5.2.4. Не использовать в коммерческих и иных целях, не копировать, не размножать, не распространять, не воспроизводить ниформацию, содержащуюся в программном обеспечении.<br/>
                5.3. организация вправе:<br/>
                5.3.1. На свое усмотрение демонстрировать Клиенту во время просмотра информационного контента или процесса использования Клиентом развлекательного контента рекламные сообщения, содержание которых не относится к предмету настоящего договора.<br/>
                5.3.2. Без предупреждения Клиента редактировать информационный или развлекательный контент.<br/>
                5.3.3 Производить видеозапись или сохранение снимков с экрана в любом количестве во время просмотра Клиентом информационного контента или использования Клиентом развлекательного контента без уведомления клиента.<br/>
                5.3.4 Пользоваться и распоряжаться любой информацией, полученной от Клиента во время действия настоящего Договора.<br/>
                5.3.5. Без уведомления Клиента блокировать доступ Клиента к программному обеспечению в случае, если Организации стали известны факты несоблюдения Клиентом пункта 5.2.3. настоящего Договора.<br/>
                5.3.6. Предоставить Клиенту любые доказательства соблюдения Организацией положений настоящего Договора, включая экспортированные отчеты и записи из информационной системы, а также воспроизводить видеозаписи или демонстрировать снимки экрана, фиксирующие процесс использования Клиентом программного обеспечения.<br/>
                5.3.7. Распространять или передавать третьим лицам любую полученную от Клиента информацию.<br/>
                <br/>
                5.4. Организация обязуется:
                5.4.1. Выполнить все обязательства, взятые на себя путем заключения настоящего Договора.<br/>
                6. Стоимость услуг и порядок расчетов.<br/>
                6.1. С Клиента не взимается плата за просмотр бесплатно предоставляемого Организацией посредствам программного обеспечения контента (правил, страниц и директорий программного обеспечения, доступных для просмотра, как до заключения настоящего Договора, так и в момент действия настоящего Договора).<br/>
                6.2. С клиента взимается плата путем авансового платежа за просмотр информационного контента и использование развлекательного контента.<br/>
                6.3. Осуществляя платеж, Клиент получает электронные очки в количестве, равном количеству внесенных авансовым платежом денежных средств, количество которых рассчитывается по формуле: один Российский рубль равен одному электронному очку. Количество электронных очков отображается в окошке "очки" на всех страницах и директориях программного обеспечения.<br/>
                6.4. Количество электронных очков может уменьшаться или увеличиваться в зависимости от действий Клиента при использовании программного обеспечения.<br/>
                6.5. Организация не осуществляет обмен электронных очков на денежные средства либо иные материальные ценности.<br/>
                6.6. Организация не возмещает Клиенту денежными средствами либо иными материальными ценностями неизрасходованные клмиентом электронные очки.<br/>
                6.7. Неизрасходованные клиентом электронные очки обнуляются до значения нуля в случае бездействия программного обеспечения в течение 30 минут.<br/>
                6.8. При завершении действия настоящего Договора или расторжении настоящего договора Клиентом в одностороннем порядке Организация не возмещает Клиенту денежными средствами либо иными материальными ценностями неизрасходованные Клиентом электронные очки.<br/>
                Обязательства Организации перед Клиентом считаются исполненными надлежащим образом в случаях обнуления количества электронных очков, предусмотренных настоящим Договором.<br/><br/>
                7. Ответственность сторон.<br/>
                7.1. Клиент несет ответственность перед Организацией в случае порчи Инфомата или отдельных его компонентов, а также за умышленную порчу программного обеспечения.<br/>
                7.2. Меры ответственности сторон, не предусмотренные настоящим Договором, применяются в соответствии с нормами действующего законодательства РФ.<br/>
                9. Срок действия Договора.<br/>
                9.1. Настоящий Договор вступает в силу с момента заключения и действует до момента обнуления количества электронных очков до значения нуля в случаях предусмотренных настоящим Договором, либо до расторжения клиентом настоящего Договора в одностороннем порядке.<br/>
                10. Заключительное положение.<br/>
                10.1. Все возникающие между сторонами споры и разногласия, касающиеся настоящего Договора, стороны разрешеют путем переговоров.<br/><br/><br/>
                Генеральный Директор К.Ю.Сучков

                </p>
                {/* </div> */}
        </div>
        <div >
                <ButtonDark
                text = {"Принять условия"}
                click = {props.modalHide}
        /></div>
        </div>
        
    )
}
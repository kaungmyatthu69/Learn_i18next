import React, { useState } from 'react'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
const App = () => {
  const [message,setMessage] = useState(0)

  const {t,i18n} = useTranslation();
  const locales={
    en:{title:"English"},
    chinese:{title:"Chinese"}
  }
  return (
    <div>
      <ul>
        {
          Object.keys(locales).map((locale)=>(
            <li key={locale}>
              <button style={{fontWeight:i18n.resolvedLanguage===locale?'bold':'normal'}} onClick={()=>i18n.changeLanguage(locale)}>{locales[locale].title}</button>
            </li>
          ))
        }
      </ul>
      <h1>{t("main.header")}</h1>
      <button onClick={()=>setMessage(message+1)}>+1 Message</button>
      <p>
        {t("main.new_messages",{count:message})}
      </p>
      <p>
        {t("main.current_date",{date:new Date()})}
      </p>
      <p>
        {t("main.incoming_messages",{from:'Anna'})} <br />
        {t("main.message_contents",{body:"How are you doing?",context:'female'})}
      </p>
    </div>
  )
}

export default function WrappedApp()  {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  )
}
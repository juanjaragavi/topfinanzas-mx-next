import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Home,
  Smartphone,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "¿Qué es el score crediticio y por qué es tan importante? | TopFinanzas",
  description:
    "Escucharás hablar mucho sobre un número clave de tres dígitos: tu score crediticio. Entenderlo es uno de los pilares más importantes de tus finanzas personales.",
  openGraph: {
    title: "¿Qué es el score crediticio y por qué es tan importante?",
    description:
      "Escucharás hablar mucho sobre un número clave de tres dígitos: tu score crediticio. Entenderlo es uno de los pilares más importantes de tus finanzas personales.",
    images: [
      {
        url: "https://media.topfinanzas.com/images/que-es-el-score-crediticio-y-por-que-es-tan-importante.png",
        width: 1200,
        height: 630,
        alt: "Score Crediticio",
      },
    ],
  },
};

export default function ScoreCrediticioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Finanzas Personales
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                ¿Qué es el score crediticio y por qué es tan importante?
              </h1>

              {/* Ad Unit - Square 01 */}
              <div className="my-6 flex justify-center">
                <div id="square01" data-topads data-topads-size="square"></div>
              </div>

              <div className="flex items-center text-gray-500 text-sm mb-8">
                <span className="mr-4">Por Diana Berrío</span>
                <span className="mr-4">•</span>
                <span>29 de Agosto, 2025</span>
              </div>
            </div>

            <div className="relative aspect-video w-full mb-12 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/que-es-el-score-crediticio-y-por-que-es-tan-importante.png"
                alt="Score Crediticio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-xl text-gray-600 mb-8">
              Escucharás hablar mucho sobre un número clave de tres dígitos: tu
              score crediticio. Aunque suene a algo complicado, entenderlo es
              uno de los pilares más importantes de tus finanzas personales.
            </p>

            <p className="mb-8">
              En esta guía, te explicaremos de forma sencilla qué es, por qué es
              crucial en México y cómo puedes empezar a construir uno excelente
              desde hoy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Para empezar, ¿qué es exactamente el score crediticio?
            </h2>

            <p className="mb-6">
              En pocas palabras, el score crediticio es una calificación
              numérica que va, por lo general, de 400 a 850 puntos. Este número
              resume tu comportamiento y experiencia con los créditos, y le dice
              a las instituciones financieras qué tan probable es que pagues tus
              deudas a tiempo. Es como tu calificación en la escuela de las
              finanzas: un score más alto significa que eres un alumno
              responsable, mientras que uno bajo podría indicar que eres un
              riesgo.
            </p>

            <p className="mb-8">
              Esta calificación la calculan las Sociedades de Información
              Crediticia (SICs), mejor conocidas como el{" "}
              <Link
                href="/finanzas-personales/que-es-el-buro-de-credito-y-por-que-es-importante"
                className="text-blue-600 hover:underline"
              >
                Buró de Crédito
              </Link>{" "}
              y Círculo de Crédito. Estas empresas recopilan la información de
              tu
              <Link
                href="/finanzas-personales/que-es-el-historial-crediticio-y-como-te-afecta"
                className="text-blue-600 hover:underline"
              >
                historial crediticio
              </Link>
              , que es el registro de todos los créditos que has tenido (
              <Link href="/tarjetas" className="text-blue-600 hover:underline">
                tarjetas de crédito
              </Link>
              , plans de celular, préstamos, etc.). Cuando pides un préstamo,
              los bancos, las tiendas departamentales y otras instituciones
              revisan tu score para decidir si te aprueban el crédito y con qué
              condiciones.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Los factores clave que construyen tu score crediticio
            </h2>

            <p className="mb-6">
              Tu score no es un número al azar, sino el resultado de varios
              factores que reflejan tus hábitos financieros. Aunque la fórmula
              exacta es un secreto, se conocen los ingredientes principales:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">
                    Puntualidad de tus pagos (Lo más importante):
                  </span>{" "}
                  Este es el factor con más peso. Pagar tus cuentas a tiempo,
                  siempre, es la regla de oro. Un solo pago atrasado puede
                  afectar negativamente tu calificación.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">Uso de tus créditos:</span> Se
                  refiere a cuánto de tu línea de crédito total estás
                  utilizando. Por ejemplo, si tu tarjeta tiene un límite de
                  $10,000 y debes $8,000, estás usando el 80%. Los expertos
                  recomiendan mantener este porcentaje por debajo del 30% o 40%.
                  «Topar» tus tarjetas es una señal de alerta.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">Experiencia crediticia:</span>{" "}
                  Mide cuánto tiempo llevas usando créditos. Un historial más
                  largo y con buen comportamiento es positivo. Si eres joven, tu
                  historial será corto, ¡y no pasa nada! Lo importante es
                  empezar a construirlo bien desde ahora.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">
                    Tipos de crédito utilizados:
                  </span>{" "}
                  Tener una mezcla de diferentes tipos de crédito (tarjeta
                  bancaria, departamental, crédito automotriz) puede ser
                  beneficioso, ya que demuestra que puedes manejar distintas
                  responsabilidades. Sin embargo, no te apresures a abrir
                  cuentas solo por esto.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">
                    Consultas y créditos nuevos:
                  </span>{" "}
                  Cada vez que solicitas un crédito, la institución consulta tu
                  historial. Hacer muchas solicitudes en poco tiempo puede
                  interpretarse como que necesitas dinero urgentemente y baja tu
                  score temporalmente.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              ¿Por qué tu score es tan importante en México?
            </h2>

            <p className="mb-6">
              Entender tu score es más que un simple número; tiene un impacto
              directo en tu vida y en tu capacidad para alcanzar tus metas. Un
              buen score crediticio te abre puertas y te ahorra dinero.
            </p>

            <p className="mb-6">Aquí es donde entra en juego:</p>

            <div className="grid md:grid-cols-1 gap-4 mb-8">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-4 flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Obtener créditos importantes
                    </h3>
                    <p className="text-sm text-gray-700">
                      Un buen score es fundamental para que te aprueben un
                      crédito automotriz o un crédito hipotecario en el futuro.
                      Además, te permite acceder a mejores condiciones, como
                      tasas de interés más bajas, lo que significa que pagarás
                      menos dinero a largo plazo.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-4 flex items-start">
                  <Home className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Rentar un departamento
                    </h3>
                    <p className="text-sm text-gray-700">
                      Cada vez más, los arrendadores en México consultan el
                      historial crediticio de los posibles inquilinos para
                      asegurarse de que son personas responsables y puntuales
                      con sus pagos.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-4 flex items-start">
                  <Smartphone className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Contratar servicios
                    </h3>
                    <p className="text-sm text-gray-700">
                      Compañías de telefonía celular, cable o incluso algunas
                      aseguradoras pueden revisar tu historial. Un mal score
                      podría hacer que te pidan un depósito o garantía para
                      contratar el servicio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="mb-8">
              Construir un buen crédito es una parte esencial de la{" "}
              <Link
                href="/finanzas-personales/aumento-de-sueldo-la-guia-definitiva-de-finanzas-personales-para-no-malgastar-tu-dinero"
                className="text-blue-600 hover:underline"
              >
                administración del dinero para principiantes
              </Link>
              . Te da la base para que tus planes a futuro sean más fáciles y
              económicos de alcanzar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Cómo empezar a construir un buen score desde cero
            </h2>

            <p className="mb-6">
              Si nunca has tenido un crédito, no te preocupes. Todos empezamos
              igual. Aquí te damos algunas estrategias sencillas para empezar a
              construir un historial crediticio positivo en México:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CreditCard className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">
                    Saca una tarjeta departamental:
                  </span>{" "}
                  Las tarjetas de tiendas como Liverpool, Palacio de Hierro o
                  Coppel suelen ser más fáciles de obtener que las bancarias.
                  Úsalas para compras pequeñas y págalas completas cada mes.
                </div>
              </li>
              <li className="flex items-start">
                <Smartphone className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">
                    Contrata un plan de telefonía celular:
                  </span>{" "}
                  Poner un plan de celular a tu nombre es una forma de crédito.
                  Al pagar puntualmente cada mes, estás generando un buen
                  registro en tu historial.
                </div>
              </li>
              <li className="flex items-start">
                <CreditCard className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-bold">
                    Busca una tarjeta de crédito para principiantes:
                  </span>{" "}
                  Muchos bancos ofrecen productos diseñados para jóvenes o
                  personas sin historial, con límites de crédito bajos para
                  empezar. Son una excelente herramienta si se usan con
                  responsabilidad.
                </div>
              </li>
            </ul>

            <p className="mb-8">
              La clave con cualquiera de estas opciones es siempre la misma:
              paga todo a tiempo y, si es posible, el total de tu deuda cada
              mes. Aquí es donde entiendes{" "}
              <Link
                href="/finanzas-personales/inversion-inteligente-en-mexico-como-hacer-crecer-tu-dinero"
                className="text-blue-600 hover:underline"
              >
                por qué necesitas un fondo de emergencia
              </Link>
              ; tener un ahorro te ayudará a cubrir tus pagos sin falta, incluso
              si tienes un imprevisto.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Toma el control de tu futuro financiero
            </h2>

            <p className="mb-6">
              Tu score crediticio puede parecer solo un número, pero en realidad
              es un reflejo de tu responsabilidad y una herramienta poderosa
              para tu futuro. Al entender cómo funciona y tomar acciones para
              construirlo de manera positiva, no solo buscas una buena
              calificación, sino que estás sentando las bases para una vida
              financiera estable y exitosa. Empezar a cuidar tu historial hoy es
              una de las mejores decisiones que puedes tomar para tus finanzas
              personales. ¡Tú puedes!
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-sm text-gray-600 italic">
                Aviso: Este artículo es únicamente para fines informativos y no
                constituye asesoría financiera o legal. Consulta a un
                profesional calificado antes de tomar cualquier decisión
                financiera.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CompactFooter />
    </div>
  );
}

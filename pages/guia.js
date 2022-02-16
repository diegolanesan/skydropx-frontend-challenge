import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import Container from '@/ui/Container'
import H1 from '@/ui/H1'
import Button from '@/ui/Button'

const Guia = () => {
  const router = useRouter()
  const label = useSelector((state) => state.shipments.label)
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Container>
      <H1> Tu guía </H1>

      <div className="w-full sm:w-4/5 my-12">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <Viewer
            fileUrl={label.data.attributes.label_url}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
      <div className="w-4/5 sm:w-1/5">
        <Button type="button" onClick={() => router.push('/')}>
          Realizar una nueva cotización
        </Button>
      </div>
    </Container>
  )
}

export default Guia

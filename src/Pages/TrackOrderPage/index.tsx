import { useState } from 'react'
import Header from '@/components/SimpleHeader'
import { PageWrapper } from './styles'
import TrackForm from './TrackForm'
import TrackingResult from './TrackingResult'

export default function TrackOrderPage() {
  const [trackStatus, setTrackStatus] = useState(0)
  const [trackData, setTrackData] = useState<any | null>(null)

  return (
    <PageWrapper>
      <Header />
      {trackStatus !== 0 && (
        <TrackingResult
          trackingCode={trackData.awb}
          events={trackData.statusHistory}
          currentStatus={trackData.currentStatus}
          estimatedDeliveryDate={trackData.estimatedDeliveryDate}
          setTrackStatus={setTrackStatus}
        />
      )}

      {trackStatus === 0 && (
        <TrackForm setTrackStatus={setTrackStatus} setTrackData={setTrackData} />
      )}
    </PageWrapper>
  )
}

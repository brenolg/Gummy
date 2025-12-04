import { useState } from 'react'
import Header from '@/components/SimpleHeader'
import { PageWrapper } from './styles'
import TrackForm from './TrackForm'
import TrackingResult from './TrackingResult'
import { mockTrackingApiResponse } from './TrackingResult/mock'

export default function TrackOrderPage() {
  const [trackStatus, setTrackStatus] = useState(0)

  return (
    <PageWrapper>
      <Header />
      {trackStatus !== 0 && (
        <TrackingResult
          trackingCode="TXAS7990048txt"
          events={mockTrackingApiResponse.statusHistory}
          currentStatus={mockTrackingApiResponse.currentStatus}
          estimatedDeliveryDate={mockTrackingApiResponse.estimatedDeliveryDate}
          setTrackStatus={setTrackStatus}
        />
      )}

      {trackStatus === 0 && <TrackForm setTrackStatus={setTrackStatus} />}
    </PageWrapper>
  )
}

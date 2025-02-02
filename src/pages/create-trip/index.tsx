import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guest-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-steps'

export function CreateTripPage() {
    const navigate = useNavigate()

  const [isGuestInputOpen, setIsGuestInputOpen]= useState(false)
  const [isGuestsModalOpen, setIsGuestModalOpen]= useState(false)
  const [isConfirmTripModalOpen, setConfirmTripModalOpen]= useState(false)
  const [emailsToInivte, setEmailsToInvite]= useState([
    'ericaugust2006@gmail.com'
  ])

  function openGuestInput(){
    setIsGuestInputOpen(true)
  }

  function closeGuestInput(){
    setIsGuestInputOpen(false)
  }

  function openGuestsModal(){
    setIsGuestModalOpen(true)
  }

  function closeGuestModal(){
    setIsGuestModalOpen(false)    
  }

  function openConfirmTripModal(){
    setConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal(){
    setConfirmTripModalOpen(false)    
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()


    if(!email){
      return
    }

    if(emailsToInivte.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToInivte,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string){
    const newEmailList = emailsToInivte.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>  
        </div>
         <div className='space-y-4'>
           <DestinationAndDateStep
            closeGuestInput={closeGuestInput}
            isGuestInputOpen= {isGuestInputOpen}
            openGuestInput= {openGuestInput}
           />

          {isGuestInputOpen && (
            <InviteGuestsStep
                emailsToInvite={emailsToInivte}
                openConfirmTripModal={openConfirmTripModal}
                openGuestsModal={openGuestsModal}
            />
          )}
         </div>
  
         <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>
       </div>

       {isGuestsModalOpen && (
        <InviteGuestsModal 
        emailsToInivte={emailsToInivte}
        addNewEmailToInvite={addNewEmailToInvite}
        closeGuestModal={closeGuestModal}
        removeEmailFromInvites={removeEmailFromInvites}
        />
       )}

{/* separation */}

        {isConfirmTripModalOpen && (
         <ConfirmTripModal
         closeConfirmTripModal={closeConfirmTripModal}
         createTrip={createTrip}
         />
        )}


    </div>
  )
}
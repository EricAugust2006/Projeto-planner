import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests(){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
                <div className="space-y-5">
                    {/* caixinha ao lado (links) */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium text-zinc-100">Jéssica White</span>
                            <span className="block text-sm text-zinc-400 truncate">
                            jessica.white44@yahoo.com
                            </span>
                        </div>
                        {/* pode se usar shrink-0 na linha abaixo para o icon n perder tamanho ou o flex-1 na linha 87 */}
                        <CircleDashed className="text-zinc400 size-5 shrink-0" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                            <span className="block text-xs text-zinc-400 truncate">
                                lacy.stiedemann@gmail.com
                            </span>
                        </div>
                        {/* pode se usar shrink-0 na linha abaixo para o icon n perder tamanho ou o flex-1 na linha 87 */}
                        <CircleDashed className="text-zinc400 size-5 shrink-0" />
                    </div>
                </div>

                <Button variant="secundary" size="full">
                    <UserCog className="size-5"/>
                    Gerenciar convidados
                </Button>
        </div>
    )
}
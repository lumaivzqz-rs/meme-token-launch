'use client'
import React from 'react'
import { cn, formatAddress } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'
import { cva } from 'class-variance-authority'
import { MetamaskIcon, SignOutIcon } from '@/components/icons'

type Props = {
    className?: string
}

const variants = cva("");

const ConnectedWallet = ({ className }: Props) => {
    const { address, logout } = useAuth()

    return (
        <div className={cn(variants(), className)}>
            <div className="flex flex-row gap-4">
                <div className="text-2xl bg-white flex items-center text-black px-4 before:w-full btn-outline">
                    <MetamaskIcon className="w-5 h-5 mr-2" />
                    <div className="w-full">{formatAddress(address)}</div>
                </div>
                <button
                    onClick={logout}
                    className="bg-card border rounded-md px-6 hover:bg-purple-600 flex flex-row gap-2 transition-colors items-center justify-center"
                >
                    <SignOutIcon className="w-5 h-5"/>
                    <div >Sign out</div>
                </button>
            </div>
        </div>
    )
}

export default ConnectedWallet

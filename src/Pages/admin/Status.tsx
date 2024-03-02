import { Button } from '@/registry/default/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/default/ui/dialog';
import { Input } from '@/registry/default/ui/input';
import { Label } from '@/registry/default/ui/label';
import { ScrollArea } from '@/registry/default/ui/scroll-area'
import { Separator } from '@/registry/default/ui/separator'
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import React from 'react'

const Status = () => {
    const [frameworks, setFramework] = React.useState([
        {
            value: "un-asign",
            label: "un-asign",
        },
        {
            value: "todo",
            label: "todo",
        },
        {
            value: "center",
            label: "center",
        },
        {
            value: "ending",
            label: "ending",
        },
        {
            value: "preview",
            label: "preview",
        },
        {
            value: "preview",
            label: "preview",
        },
        {
            value: "preview",
            label: "preview",
        },
        {
            value: "preview",
            label: "preview",
        },
    ]);
    const [editing, setEditing] = React.useState("")
    const [add, setAdd] = React.useState<string>("");
    const handleEdit = (value: string) => {
        console.log("value is ", value)
        setEditing(value)
    }
    const handleUpdate = (value: string, index: number) => {
        console.log("vlaue ", value, index)
        const updatedFrameworks = [...frameworks];
        updatedFrameworks[index].value = value;
        console.log("updatedFrameworks", updatedFrameworks)
        setFramework(updatedFrameworks);
    }
    const handleDelete = (index: number) => {
        console.log("index is ", index)
        const updatedFrameworks = [...frameworks];
        updatedFrameworks.splice(index, 1);
        console.log("updatedFrameworks", updatedFrameworks)
        setFramework(updatedFrameworks);
    }
    const handleAdd = () => {
        console.log("add", add);
        const updatedFrameworks = [...frameworks];
        updatedFrameworks.push({ value: add, label: add });
        setFramework(updatedFrameworks)
        // conso
    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Status</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Status</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Status
                            </Label>
                            <Input id="name" className="col-span-3" onChange={(e) => setAdd(e.target.value)} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={() => handleAdd()}>Add Status</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <ScrollArea className=" h-72 w-56 rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Status</h4>
                    <Separator className="my-2" />
                    {frameworks.map((tag, index) => (
                        <>
                            <div key={index} className="text-sm flex justify-between">
                                {tag.value}
                                <span className='flex flex-row'>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Pencil onClick={() => handleEdit(tag.value)} />
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Edit Status</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        Edit
                                                    </Label>
                                                    <Input id="name" value={editing} onChange={(e) => setEditing(e.target.value)} className="col-span-3" />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit" onClick={() => { handleUpdate(editing, index) }}>Update</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <Trash2 onClick={() => handleDelete(index)} />
                                </span>
                            </div>
                            <Separator className="my-2" />
                        </>
                    ))}
                </div>
            </ScrollArea>


        </div>
    )
}

export default Status